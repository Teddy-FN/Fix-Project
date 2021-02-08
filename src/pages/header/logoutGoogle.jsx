import React from 'react';
// Google Logout 
import { GoogleLogout } from 'react-google-login'

const LogoutGoogle = () => {
    // Google Logout
    const onSuccess = () => {
        alert('Success')
    }
    return (
        <div>
            <GoogleLogout
                clientId="548645407023-l8n4p4pia7mclrheramf7knu2f5b6cve.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}
export default LogoutGoogle