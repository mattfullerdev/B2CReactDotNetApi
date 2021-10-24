import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig.js';

export const SignInButton = () => {

    const { instance } = useMsal();

    const handleLogin = (loginType) => {
        if (loginType === 'popup') {
            instance.loginPopup(loginRequest).catch(e => {
                return;
            });
        } else if (loginType === 'redirect') {
            instance.loginRedirect(loginRequest);
        }
    }

    return (
        <>
            <NavDropdown title="Sign In" id="signInDropDown">
                <NavDropdown.Item onClick={() => handleLogin("popup")}>Sign in using Popup</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogin("redirect")}>Sign in using Redirect</NavDropdown.Item>
            </NavDropdown>
        </>
    )
};