import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import toast from 'react-hot-toast';


function Navbar(props) {

    let loggedIn = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div>
            <nav className='flex text-richblack-100 mt-5 w-11/12 max-w-[1160px] justify-between font-bold'>

                <Link to="/" className=' ml-24 mt-2'> <img src={logo} height={32} width={160} /></Link>

                <ul className='flex gap-x-6 mt-2'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact Us</Link>
                    </li>
                </ul>
                <div className='flex items-center gap-x-4 '>
                    {
                        !loggedIn && <Link to="/LogIn"> <button className=' border border-richblack-700 rounded-[8px] py-[8px] px-[6px]'>LogIn</button></Link>
                    }
                    {
                        !loggedIn && <Link to="SignUp"><button className=' border border-richblack-700 rounded-[8px] py-[8px] px-[6px]'>SignUp</button></Link>
                    }
                    {
                        loggedIn && <Link to="LogOut"> <button  className=' border border-richblack-700 rounded-[8px] py-[8px] px-[6px]'onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged Out");
                        }}>LogOut</button></Link>
                    }
                    {
                        loggedIn && <Link to="Dashboard"><button className=' border border-richblack-700 rounded-[8px] py-[8px] px-[6px]'>Dashboard</button></Link>
                    }
                </div>
            </nav>

        </div>
    )
}

export default Navbar;