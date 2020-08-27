import React from 'react';

const Card = (props) => {
    const { courseName, price, instructor, img } = props.course;
    return (
       <div class="card mb-4">
            <img src={img} className="card-img-top img-fluid" alt="..." style={{height:"300px"}}/>
            <div class="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p className="card-text">By: {instructor}</p>
                <p className="card-text"><small>Price: ${price}</small></p>
            </div>
            <div class="card-footer">
                <button className="btn btn-primary">Buy This Course</button>
            </div>
        </div>
    );
};

export default Card;