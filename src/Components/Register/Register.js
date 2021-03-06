import React from 'react';
import Tilt from 'react-tilt';
import "../SignIn/signin.css";



const Register = ({ onRouteChange }) => {
	return(
			<Tilt className="Tilt" options={{ max : 25 }} style={{opacity:0.6}} >
				 <div className="Tilt-inner"> 
				 	<main className=" pa4 black-80 b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center" >
  						<form className="measure" >
    						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      							<legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                      </div>
      								<div className="mt3">
        								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        								<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
      								</div>
      								<div className="mv3">
        								<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        								<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
     								</div>
   							</fieldset>
  	  					<div className="">
     							<input onClick={() => onRouteChange('home')}className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="SignIn" />
    						</div>
  						</form>
					</main>
				 </div>
			</Tilt>
		)
}

export default Register;