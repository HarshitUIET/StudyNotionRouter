import Template from "../components/Template";
import loginimg from "../assets/signup.png"

function SignUp({setloggedin}) {
    return (
        <div>
           <Template 
           title="Join the millions learning to code with StudyNotion for free"
           Desc1="Build Skills for today,tomorrow and beyond."
           Desc2="Education to future-proof your carrer."
           formtype="signup"
           setloggedin={setloggedin}
           loginimg={loginimg}
           />
        </div>
    )
}

export default SignUp;