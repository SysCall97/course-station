import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.course.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Buy This Course</button>
                    </div>
            </div>
        </div>
    );
};

export default Card;