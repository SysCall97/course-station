import React from 'react';
import './Courses.css';
import { useState } from 'react';
import courseInfo from '../../DataBase/Database'
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Courses = () => {
    let key = 1;
    const [ numberOfCourses, setNumberOfCourses ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0);

    const purchaseCourse = function (course) {
        setNumberOfCourses(numberOfCourses + 1);
        setTotalPrice(totalPrice + course.price);
    }
    return (
        <div>
            <Cart numberOfCourses={numberOfCourses} totalPrice={totalPrice}></Cart>
            <div className="container">
                <div className="card-deck">
                    {
                        courseInfo.map(course => <Card course={course} purchaseCourse={purchaseCourse} key={key++}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;