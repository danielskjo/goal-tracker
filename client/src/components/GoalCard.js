import React from 'react';
import ListItem from "@mui/material/ListItem";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const GoalCard = ({goal}) => {
    let convertDatetimeToDate = (datetime) => {
        return `${datetime.substring(8, 11)} ${datetime.substring(5, 7)} ${datetime.substring(12, 16)}`
    }

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={goal.title}
                    secondary={
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {goal.description}
                        </Typography>
                    }
                />
                {convertDatetimeToDate(goal.date)}
                <CircularProgressWithLabel value={goal.progress}/>
            </ListItem>
            <Divider variant="inset" component="li"/>
        </div>
    )
}

export default GoalCard