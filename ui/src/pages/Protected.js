import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { ProtectedComponent } from '../components/ProtectedComponent';
import { useMsal } from '@azure/msal-react';
import { useIsAuthenticated } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest } from '../authConfig';
import Container from 'react-bootstrap/Container'


export const Protected = () => {
	const isAuthenticated = useIsAuthenticated();
	const { instance, inProgress } = useMsal();

	if (inProgress === InteractionStatus.None && !isAuthenticated) {
		instance.loginRedirect(loginRequest);
	}

	return (
		<Container>
			<AuthenticatedTemplate>
				<p>You've logged in, this is the protected endpoint.</p>
                <ProtectedComponent />
			</AuthenticatedTemplate>

			<UnauthenticatedTemplate>
				<p>Redirecting...</p>
			</UnauthenticatedTemplate>
		</Container>
	);
}