import React from 'react';

const Card = (props) => {
    const { courseName, price, instructor, img } = props.course;
    const nameStyle = {
        fontWeight: "600",
        fontSize: "larger"
    }
    const courseStyle = {
        color: "#3498db"
    }
    const cardStyle = {
        boxShadow: "5px 5px 10px gray"
    }
    return (
       <div className="card mb-4" style={cardStyle}>
            <img src={img} className="card-img-top img-fluid" alt="..." style={{height:"300px"}}/>
            <div className="card-body">
                <h2 className="card-title" style={courseStyle}>{courseName}</h2>
                <p className="card-text">By: <span style={nameStyle}>{instructor}</span></p>
                <p className="card-text"><small>Price: ${price}</small></p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={() => props.purchaseCourse(props.course)}>Buy This Course</button>
            </div>
        </div>
    );
};

export default Card;