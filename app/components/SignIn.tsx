export default function SignIn(){
    return(
        <center>
        <div>
<div className="container-1">
<div className="mainContainer">
    <div className="formPage">
       <div className="login formBlock active" id="tab-1">
          <form name="loginform">
          <p style={{ color: '#024D5F', fontSize: '23px', fontWeight: 'bold'}}>Sign In</p>
          <div className="form-group">
            <input type="name" name="name" id="name" placeholder="login"/>
            <p id="unError" className="error"></p>
          </div>
          <div className="form-group">
            <input type="password" name="password" id="password" placeholder="Password"/>
            <p id="pwError" className="error"></p>
        </div>
<center>
<div className="form-group alignCenter pb-2">
<button className="create" style={{ fontSize: '10px'}}>Login </button>
</div>
</center>
<div><a style={{ fontSize: '10px'}}>you don't have an account? Sign up</a></div>
</form>
</div>
</div> 
</div>
</div> 
        </div>
        </center>
    )
    
}