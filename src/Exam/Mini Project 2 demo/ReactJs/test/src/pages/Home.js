import { useLocation, useNavigate } from "react-router-dom";
export const Home = () =>{
    const location = useLocation();
    return(
        <h1>Welcome To Home Page</h1>
    );
}