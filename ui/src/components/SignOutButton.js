import { useMsal } from '@azure/msal-react';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const SignOutButton = () => {

    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === 'popup') {
            instance.logoutPopup();
        } else if (logoutType === 'redirect') {
            instance.logoutRedirect();
        }
    }

    return (
        <>
            <NavDropdown title="Sign Out" id="signInDropDown">
                <NavDropdown.Item onClick={() => handleLogout("popup")}>Sign out using Popup</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogout("redirect")}>Sign out using Redirect</NavDropdown.Item>
            </NavDropdown>
        </>
    )
};