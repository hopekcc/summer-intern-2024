import styles from '../assets/css-modules/app.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import Loading from '../components/loading';

function Profile(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/userinfo",
            {
                method: "GET",
                credentials: "include"
            }
        )
        .then(
            res => {
                if(!res.ok){
                    if(res.status === 401){
                        navigate("/signin");
                    }
                    else{
                        throw new Error(`Error! status: ${res.status}. Message: ${res.statusText}`);
                    }
                }
                return res.json();
            }
        )
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(
            error =>  console.log(`Error: ${error}`)
        )
    } ,[navigate]);

    function handleLogout(){
        googleLogout();
        fetch("http://localhost:8000/auth/logout",
            {
                method: "POST",
                credentials: "include"
            }
        )
        .then(
            res => {
                if(!res.ok){
                    throw new Error(`Error! status: ${res.status}. Message: ${res.statusText}`);
                }
                localStorage.clear();
                navigate("/signin");
            }
        )
        .catch(
            error =>  console.log(`Logout Error: ${error}`)
        )
    }

    return (
        <div>
        {loading ? (<Loading />) : (
            <div className={styles.container}>
                <h2>Profile</h2>
                <h4>Welcome to your profile page!</h4>
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>Email: {user.email}</p>
                <button onClick={handleLogout}>Log Out</button>
            </div>)
        }
        </div>
    )
}

export default Profile