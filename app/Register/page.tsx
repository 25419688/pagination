
export default function Register(){
    return(
        <center>
        <div>
            <div className="container-1">
<div className="mainContainer">
<div className="formPage">
<div className="login formBlock active" id="tab-1">
<form name="loginform">
<p style={{ color: '#024D5F', fontSize: '23px', fontWeight: 'bold'}}>Registration Form</p>
<div className="form-group">
<input type="name" name="name" id="name" placeholder="Name"/>
<p id="unError" className="error"></p>
</div>
<div className="form-group">
<input type="text" name="email" id="regemail" placeholder="Email Address"/>
<p id="regemailError" className="error"></p>
</div>
<div className="form-group">
<input type="text" name="country" id="name" placeholder="Country"/>
<p id="unError" className="error"></p>
</div>
<div className="form-group">
<input type="phone" name="phone" id="" placeholder="Phone"/>
<p id="reguserError" className="error"></p>
</div>
<div className="form-group">
<input type="password" name="password" id="password" placeholder="Password"/>
<p id="pwError" className="error"></p>
</div>
<center>
<div className="form-group alignCenter pb-2">
<button className="create" style={{ fontSize: '10px'}}>CREATE ACCOUNT</button>
</div>
</center>
<div><a style={{ fontSize: '10px'}}>Already have an account? Sign in</a></div>
</form>
</div>
</div> 
</div>
</div> 
        </div>
        </center>
    )
}