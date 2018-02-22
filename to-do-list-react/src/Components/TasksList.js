import React from 'react';

const TasksList = props =>(
    <ol>
        {props.ItemsList.map((inputItem, index)  => <li key={index}>{inputItem}</li>)}
    </ol>
);

export default TasksList