import datetime
import json

from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required

from .constants.http_status_codes import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT, HTTP_400_BAD_REQUEST, \
    HTTP_404_NOT_FOUND
from .database import db, Goal

goals = Blueprint("goals", __name__, url_prefix="/api/goals")


def to_date(date_str):
    try:
        return datetime.datetime.strptime(date_str, "%Y-%m-%d").date()
    except ValueError:
        raise ValueError(f'{date_str} is not valid date in the format YYYY-MM-DD')


@goals.route('/', methods=['GET', 'POST'])
@jwt_required()
def handle_goals():
    current_user = get_jwt_identity()

    if request.method == 'POST':
        title = request.get_json().get('title', '')
        description = request.get_json().get('description', '')

        try:
            date = to_date(request.get_json().get('date', datetime.date.today().isoformat()))
        except ValueError as e:
            return jsonify({'error': str(e)}), HTTP_400_BAD_REQUEST

        if not title:
            return jsonify({
                'error': 'Enter a title'
            }), HTTP_400_BAD_REQUEST

        goal = Goal(title=title, description=description, user_id=current_user, date=date)

        db.session.add(goal)
        db.session.commit()

        return jsonify({
            'id': goal.id,
            'title': goal.title,
            'description': goal.description,
            'date': goal.date,
            'created_at': goal.created_at,
            'updated_at': goal.updated_at
        }), HTTP_201_CREATED
    else:
        goals = Goal.query.filter_by(user_id=current_user)

        data = []

        for goal in goals:
            data.append({
                'id': goal.id,
                'title': goal.title,
                'description': goal.description,
                'date': goal.date,
                'created_at': goal.created_at,
                'updated_at': goal.updated_at
            })

        return jsonify({
            "data": data
        }), HTTP_200_OK


@goals.route('/<int:id>', methods=['GET', 'PUT', 'PATCH', 'DELETE'])
@jwt_required()
def handle_goal(id):
    current_user = get_jwt_identity()

    goal = Goal.query.filter_by(user_id=current_user, id=id).first()
    print(goal)
    if not goal:
        return jsonify({'message': 'Item not found'}), HTTP_404_NOT_FOUND

    if request.method == 'PUT' or request.method == 'PATCH':
        title = request.get_json().get('title', '')
        description = request.get_json().get('description', '')

        try:
            date = to_date(request.get_json().get('date', datetime.date.today().isoformat()))
        except ValueError as e:
            return jsonify({'error': str(e)}), HTTP_400_BAD_REQUEST

        if not title:
            return jsonify({
                'error': 'Enter a title'
            }), HTTP_400_BAD_REQUEST

        goal.title = title
        goal.description = description
        goal.date = date

        db.session.commit()

    if request.method == 'DELETE':
        db.session.delete(goal)
        db.session.commit()

        return jsonify({'message': 'Item deleted'}), HTTP_204_NO_CONTENT

    return jsonify({
        'id': goal.id,
        'title': goal.title,
        'description': goal.description,
        'date': goal.date,
        'created_at': goal.created_at,
        'updated_at': goal.updated_at
    }), HTTP_200_OK
