import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className="cart">
            <table>
                <tbody>
                    <tr>
                        <td><h4>Total Purchased Courses: </h4></td>
                        <td><h5>{props.numberOfCourses}</h5></td>
                    </tr>
                    <tr>
                        <td><h4>Total Price:</h4></td>
                        <td><h5>${props.totalPrice}</h5></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;