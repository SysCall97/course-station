import React from 'react';
import courseInfo from '../../DataBase/Database'
import Card from '../Card/Card';
import './Courses.css';

const Courses = () => {
    console.table(courseInfo);
    let key = 1;
    return (
        <div className="container">
            <div className="card-deck">
                {
                    courseInfo.map(course => <Card course={course} key={key++}></Card>)
                }
            </div>
            <div className="cart"></div>
        </div>
    );
};

export default Courses;