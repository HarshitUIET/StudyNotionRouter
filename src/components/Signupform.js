import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signupform({setloggedin}) {

    const [formData,setFormData] = useState({email:"",password:"",firstName:"",lastName:"",confirmPass:""});

    function ChangeHandler(event) {
       setFormData(prevData =>{
          return{
              ...prevData,
              [event.target.name] : event.target.value
       }
       })
    }
 
      const navigate = useNavigate();
     const [showpassword,setShowpassword] = useState(false);
     const [showConfpassword,setShowConfpassword] = useState(false);

     function SubmitHandler(event) {
        if(formData.password !== formData.confirmPass) {
            toast.error("Password and Confirm Password not matched");
        }
        else{
            event.preventDefault();
        setloggedin(true);
        const finalData = {
            ...formData,
              accountType 
        }
        console.log(finalData);
        toast.success("Sign Up Successfully");
        navigate("/dashboard");
        }
     } 

     const [accountType,setAccounttype] = useState("student");

    return (
        <div>
          <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button onClick={()=>{setAccounttype("student")}} className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} >Student</button>
            <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>{setAccounttype("instructor")}}>Instructor</button>
          </div>
         
            <form onSubmit={SubmitHandler}>
                <div className=" flex gap-x-4 mx-0">
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First Name<sup className=" text-red-500">*</sup>
                        </p>
                        <input  className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" type="text" placeholder="Enter first name" value={formData.firstName} onChange={ChangeHandler} name="firstName"  required
                        />
                    </label>
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last Name<sup className=" text-red-500">*</sup>
                        </p>
                        <input  className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" type="text" placeholder="Enter last name" value={formData.lastName} onChange={ChangeHandler} name="lastName" required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Email Address<sup className=" text-red-500">*</sup>
                        </p>
                        <input  className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-1/2 p-[12px]" type="email" placeholder="Enter email address" value={formData.email}onChange={ChangeHandler}  name="email" required
                        />
                    </label>
                </div>
                <div className=" flex gap-x-4 mx-0">
                    <label className="w-1/2 relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create Password<sup className=" text-red-500">*</sup>
                        </p>
                        <input  className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" type={showpassword ? "text" : "password"}
                        value={formData.password} onChange={ChangeHandler} name="password" required/>
                        {showpassword ? <FaEye fontSize={24} fill="#AFB2BF" className=" absolute top-[35px] cursor-pointer right-3" onClick={()=>{setShowpassword(!showpassword)}}/> : <FaEyeSlash fontSize={24} fill="#AFB2BF" className=" absolute top-[35px] cursor-pointer right-3" onClick={()=>{setShowpassword(!showpassword)}}/>}
                    </label>
                    <label className="w-1/2 relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password<sup className=" text-red-500">*</sup>
                        </p>
                        <input  className=" bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]" type={showConfpassword ? "text" : "password"}
                        value={formData.confirmPass} onChange={ChangeHandler} name="confirmPass" required />
                        {showConfpassword ? <FaEye fontSize={24} fill="#AFB2BF" className=" absolute top-[35px] cursor-pointer right-3" onClick={()=>{setShowConfpassword(!showConfpassword)}}/> : <FaEyeSlash fontSize={24} fill="#AFB2BF" className=" absolute top-[35px] cursor-pointer right-3" onClick={()=>{setShowConfpassword(!showConfpassword)}}/>}
                    </label>
                </div>
                <div>
                    <button className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full">Create Account</button>
                </div>
            </form>
          </div>
        
    )
}

export default Signupform;