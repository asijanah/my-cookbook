import React, { useState } from 'react';

import Error from './Error'

function Registration() {

    const [userDetailes, setUserDetails] = useState({
        username: { value: '', required: true, errors: [] },
        email: { value: '', required: true, patternEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: [] },
        password: { value: '', required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&=+-^~`;|":<>]{6,}$/, errors: [] },
        rePassword: { value: '', required: true, errors: [] }

    })

    const onInputChange = (el) => {

        console.log(`${el.target.name} is :${el.target.value}`);

        const newError = []

        if (userDetailes[el.target.name].required) {
            if (!el.target.value) {
                newError.push(`${el.target.name} is required`)
            }
        };

        if (userDetailes[el.target.name].patternEmail) {
            const rgxemail = userDetailes[el.target.name].patternEmail
            if (!rgxemail.test(el.target.value)) {
                newError.push(`${el.target.value} is not legal email`)
            }
        }

        if(userDetailes[el.target.name].pattern){
            const pass=userDetailes[el.target.name].pattern
            if(!pass.test(el.target.value)){
                newError.push(`${el.target.value} is not valid password`)
            }
        }

        setUserDetails({
            ...userDetailes,
            [el.target.name]: {
                ...userDetailes[el.target.name],
                value: el.target.value,
                errors: newError
            }
        })
    }

    const onSubmit = (e) => {
        console.log(userDetailes)

        e.preventDefault()
    }

    return (
        <div className="main ml-4">
            <h1 className="mb-4">Subscribe to Cookbook</h1>
            <div className="form-group form-row">
                <label className="col-md-2">User Name</label>
                <input type="input" className="form-control col-md-5" name="username" placeholder="username" required=""
                    onBlur={onInputChange}
                />
                <Error err={userDetailes.username.errors} />
            </div>

            <div className="form-group form-row">
                <label className="col-md-2">Email</label>
                <input type="input" className="form-control col-md-5" name="email" placeholder="email" required=""
                    onBlur={onInputChange}
                    defaultValue={userDetailes.email.value}
                />
                <Error err={userDetailes.email.errors} />
            </div>

            <div className="form-group form-row">
                <label className="col-md-2">Password</label>
                <input type="password" className="form-control col-md-5" name="password" placeholder="password" required=""
                    onBlur={onInputChange}
                />
                <Error err={userDetailes.password.errors} />
                <div className="col-md-10">
                    <small id="passInfo" className="form-text text-muted text-center"> Must be 6-8 characters long</small>
                </div>
            </div>
            <div className=" form-group form-row">
                <label className="col-md-2 ">Validate Password</label>
                <input type="password" className="form-control col-md-5" name="rePassword" placeholder="Return password" required=""
                    onBlur={onInputChange}
                />
                <Error err={userDetailes.rePassword.errors} />
                <div className="col-md-10">
                    <small id="rePassInfo" className="form-text text-muted text-center">Make Sure Password is The Same!</small>
                </div>
            </div>

            <div className="form-group form-row">
                <label className="col-md-2">Food i Would like To See</label>
                <div className="form-check">
                    <div className=" row form-row-container checkList">
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" style={{ width: "20rem" }}>water</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                    </div>
                    <div className=" row form-row-container checkList">
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                    </div>
                    <div className=" row form-row-container checkList">
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">water</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group form-row">
                <div className="float-right">
                    <button type="button" className="btn btn-primary">Registration</button>
                </div>
                <div className="float-right mx-2">
                    <div className="form-control alert alert-info" role="alert">
                        <p>Before sending make sure all fields are filled</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration