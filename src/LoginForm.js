import React from 'react';

function LoginForm() {
    return (
        <div className="card w-50 border-dark card-body">
            <div class="card-header bg-transparent border-dark">LOG IN</div>
            <div className="form" id="login">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
      Remember Me
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Log in</button>
            </div>
        </div>
    )
}
export default LoginForm