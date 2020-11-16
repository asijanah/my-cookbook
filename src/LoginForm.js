import React from 'react';

function LoginForm() {
    return (
        <div className="card w-50 border-dark card-body">
            <div className="card-header bg-transparent border-dark">LOG IN</div>
            <div className="form" id="login">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
      Remember Me
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Log in</button>
            </div>
        </div>
    )
}
export default LoginForm