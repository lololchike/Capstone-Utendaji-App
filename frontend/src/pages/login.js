import "../css-files/login.css"

const Login = () => {


    return (  
<div id = "login" >
<div id = "loginForm" >
    <img src="logo.JPG" alt="logo" id="login-logo"/>
    <h2 id ="login-welcome-h2">Welcome to Utendaji</h2>
    <strong><p id ="login-welcome-p">Maximizing Effort</p></strong>
    <label htmlFor="username">Username</label>
    <input type="text" id = "login-ursername" placeholder= "Username"/>
    <label htmlFor="password">Password</label>
    <input type="text" id = "login-password" placeholder= "Password" />
<button id="sign-in-button">Continue</button>

    </div>
</div>

    );
}
 
export default Login;