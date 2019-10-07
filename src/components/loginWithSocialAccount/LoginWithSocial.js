import React from 'react'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const LoginWithSocial = () => {
    const responseFacebook = (response) => {
    console.log(response);
    }
  
    const responseGoogle = (response) => {
    console.log(response);
    }
    return (
        <React.Fragment>        
            <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
            <FacebookLogin
                appId="" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
            />
            <br />

            <GoogleLogin
                clientId="" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </React.Fragment>    
    )
}

export default LoginWithSocial;