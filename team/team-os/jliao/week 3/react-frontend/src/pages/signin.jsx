import styles from '../assets/css-modules/signin.module.css';
import signinStyles from '../assets/css-modules/signin.module.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  function handleLogin(credentialResponse){
    fetch("http://localhost:8000/auth/verify",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${credentialResponse.credential}`
        },
        credentials: "include"
      }
    )
    .then(
      res => {
        if(!res.ok){
          throw new Error(`Authentication Error! status: ${res.status}. Message: ${res.statusText}`);
        }
        console.log("Success!");
        return res.json();
      }
    )
    .then(
      data => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/profile");
      }
    )
    .catch(
      error => console.log(`Credential Handler Error: ${error}`)
    )
  }
  
  return (
    <div className={styles.container}>
        <GoogleOAuthProvider clientId="632427256455-90f00d3r3di4emog5o9tpjehlcpeq0r0.apps.googleusercontent.com">
          <div className={signinStyles.signinContainer}>
            <GoogleLogin 
              onSuccess = {handleLogin}
              onError = {err => {
                    console.log(`Login Failed: ${err}`);
                }
              }
              useOneTap
              shape="pill"
              use_fedcm_for_prompt="true"
              width="300"
            />
          </div>
        </GoogleOAuthProvider>
    </div>
  );
}

export default SignIn;