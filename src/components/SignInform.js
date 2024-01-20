import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignInform({setloggedin}) {

    const [formData,setFormData] = useState({email:"",password:""});

    function changeHandler(event) {
       setFormData(prevData =>{
          return{
              ...prevData,
              [event.target.name] : event.target.value
       }
       })
    }

    const [showpassword,setShowpassword] = useState(false);
    const navigate = useNavigate();

      function SubmitHandler(event) {
        event.preventDefault();
        setloggedin(true);
        toast.success("logged In");
        console.log(formData);
        navigate("/Dashboard");
        
      }

    return (
        <div>
          <form onSubmit={SubmitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className=" text-red-500">*</sup>
                </p>
                <input type="email" name="email" required value={formData.email} onChange={changeHandler} placeholder="Enter your email" className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            </label>
            <label className=" w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                   Password<sup className=" text-red-500">*</sup>
                </p>
                <input type={showpassword ? "text" : "password"} name="password" value={formData.password} onChange={changeHandler} required placeholder="Enter your password" className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" />
                {showpassword ?  <FaEye fontSize={24} fill="#AFB2BF" className=" absolute top-[35px] cursor-pointer right-3" onClick={()=>setShowpassword(!showpassword)}/> : <FaEyeSlash fontSize={24} fill="#AFB2BF" className=" absolute top-[35px] cursor-pointer right-3" onClick={()=>setShowpassword(!showpassword)}/> }
                <p>
                    <span className=" text-xs mt-1 text-blue-100 absolute right-0">Forgot Password</span>
                </p>
            </label>
           
                <button className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4">Sign In</button>
            
           </form>
        </div>
    )
}

export default SignInform;