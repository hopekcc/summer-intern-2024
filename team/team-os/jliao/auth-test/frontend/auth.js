// replace with authorized redirect uri eventually to skip the handler step
function handleCredentialResponse(response){
    user_credential = response.credential;
    console.log(user_credential);
    fetch("http://localhost:3000/auth/verify", 
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${user_credential}`
            }
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
            window.location.href = "profile.html";
        }
    ).catch(
        error => console.log(`Credential Handler Error: ${error}`)
    )
}

// load client id from an env file
// ISSUE: SIGN IN BUTTON LOADS BEFORE CLIENTID IS LOADED, NEED TO LOAD CLIENT ID FIRST
/*
async function getClientId(){
    await fetch("http://localhost:3000/config")
        .then(
            response => response.json()
        ).then(
            data => {
                document.getElementById("g_id_onload").innerHTML=data.clientid;
            }
        ).catch(
            error => console.log(error)
        );
}

document.addEventListener("DOMContentLoaded", getClientId);
*/