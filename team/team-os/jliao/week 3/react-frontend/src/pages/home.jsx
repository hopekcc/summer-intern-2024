import styles from '../assets/css-modules/app.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/loading';

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/auth/checkAuth",
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
            setLoading(false);
        }
    )
    .catch(
        error =>  console.log(`Error: ${error}`)
    )
  } ,[navigate]);
  
  return (
    loading ? (<Loading />) : 
    (
      <div className={styles.container}>
        <div>
          <h2>Home</h2>
          <h4>Welcome to my HopeKCC Authentication Test Page</h4>
        </div>
      </div>
    )
  );
}

export default Home;


