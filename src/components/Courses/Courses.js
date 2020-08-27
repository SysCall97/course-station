import React from 'react';
import courseInfo from '../../DataBase/Database'

const Courses = () => {
    console.table(courseInfo);
    return (
        <div>
            <h1>This is courses</h1>
        </div>
    );
};

export default Courses;