import { Navigate } from "react-router-dom";

function PrivateRouter({loggedin,children}) {
    if(loggedin) {
        return children;
    }
    else{
       return <Navigate to="/Login" />
    }
}

export default PrivateRouter;