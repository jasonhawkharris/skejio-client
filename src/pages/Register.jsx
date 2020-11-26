import React from 'react';
import BasicNav from '../components/Nav/BasicNav';
import RegisterForm from '../components/Forms/RegisterForm';

import './Register.css';

const Register = props => {
    return (
        <div className="register-form-container">
            <BasicNav />
            <div className="register-form">
                <div className="ui raised segment">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register;