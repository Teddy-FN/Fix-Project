import React from 'react'
import GoogleLogin from 'react-google-login'
import refreshTokenSetup from './refreshTokenUser'
const LoginUsingGoogle = () => {
    // Login Google
    const onSuccessLogin = res => {
        localStorage.setItem('GoogleAuth', res.googleId)
        refreshTokenSetup(res)
    }
    const onFailureLogin = res => (res)

    return (
        <div>
            <GoogleLogin
                clientId="548645407023-l8n4p4pia7mclrheramf7knu2f5b6cve.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccessLogin}
                onFailure={onFailureLogin}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                className="googleAuth"
            />
        </div>
    )
}

export default LoginUsingGoogle