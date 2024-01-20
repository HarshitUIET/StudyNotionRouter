import Template from "../components/Template";
import loginimg from '../assets/login.png'

function Login({setloggedin}) {
    return (
        <div>
           <Template 
            title="Welcome Back" 
            Desc1="Build Skills for today,tomorrow and beyond."
            Desc2="Education to future-proof your career."
            loginimg={loginimg}
            formtype="signin"
            setloggedin={setloggedin}
           />
        </div>
    )
}

export default Login;