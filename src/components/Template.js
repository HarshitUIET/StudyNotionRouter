import SignInform from "./SignInform";
import Signupform from "./Signupform";
import { FcGoogle } from "react-icons/fc";
import frameimg from '../assets/frame.png';


function Template({ title, Desc1, Desc2, loginimg,formtype,setloggedin }) {

    return (
        <div className="flex max-w-[1160px] w-11/12 py-12 mx-auto gap-y-4 gap-x-12 justify-between">
            <div>
            <div className="text-[1.875rem] leading-[1.875rem] text-richblack-5 font-semibold ">
                {title}
            </div>
            <div>
                <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
                    <span className="text-richblack-100">{Desc1}</span>
                    <br/>
                    <span className="text-blue-100 italic">{Desc2}</span>
                </p>
                
                    
                
            </div>
            <div>
               {formtype==="signin" ? <SignInform setloggedin={setloggedin} /> : <Signupform setloggedin={setloggedin}/>}
            </div>
            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="w-full h-[1px] bg-richblack-100"></div>
                <span className=" text-richblack-700 font-medium leading-[1.375rem]">OR</span>
                <div className="w-full h-[1px] bg-richblack-100"></div>
            </div>
            <div>
                <button className="w-full flex justify-center items-center border border-richblack-700 rounded-[8px] font-medium text-richblack-100 px-[12px] py=[8px] gap-x-2 mt-6">
                    <FcGoogle/>
                    <span>Sign in with Google</span>
                </button>
            </div>
            </div>
            <div className=" relative w-11/12 max-w-[450px] ">
                <img src={loginimg} height={504} width={558} className="absolute -top-4 right-4" />
                <img src={frameimg} height={490} width={558} />
            </div>
        </div>
    )
}

export default Template;