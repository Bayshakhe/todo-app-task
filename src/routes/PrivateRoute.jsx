import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    if(localStorage.getItem('accessToken')){
        return children;
    }
    else{
        navigate('/login')
    }
};

export default PrivateRoute;