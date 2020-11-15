import React from 'react'

function Registration() {
    return (
        <div className="main ml-4">
            <div className="sub-wraper">
                <h1 className="mb-4">Subscribe to Cookbook</h1>
                <div className="form-group form-row">
                    <label className="col-md-2">User Name</label>
                    <input type="input" className="form-control col-md-5" name="username" placeholder="username" required="" />
                </div>
                <div className="form-group form-row">
                    <label className="col-md-2">Email</label>
                    <input type="input" className="form-control col-md-5" name="email" placeholder="email" required="" />
                </div>
            </div>
            <div className="form-group form-row">
                <label className="col-md-2">Password</label>
                <input type="password" className="form-control col-md-5" name="password" placeholder="password" required="" />
                <div className="col-md-10">
                    <small id="passInfo" className="form-text text-muted text-center"> Must be 6-8 characters long</small>
                </div>
            </div>
            <div className=" form-group form-row">
                <label className="col-md-2 ">Validate Password</label>
                <input type="password" className="form-control col-md-5" name="validPass" placeholder="Return password" required="" />
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
                            <label className="form-check-label" style={{width: "20rem"}}>water</label>
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