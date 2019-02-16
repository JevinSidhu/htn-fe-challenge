import React, { Component } from 'react';
import success from '../img/success.svg';

class SuccessPage extends Component {
    render() {
        return (
            <div id="success-container">
                <img className="smiley" src={success} alt="happy face" />
                <h2>Boom. You're all set!</h2>
                <p>Thank you for applying! We'll get back to you shortly.</p>
            </div>
        )
    }
}

export default SuccessPage;

