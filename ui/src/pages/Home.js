import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { UnprotectedComponent } from '../components/UnprotectedComponent';

export const Home = () => {
	return (
		<Container>
			<AuthenticatedTemplate>
				<p>You've logged in, click <Link to="/protected">here</Link> to access the protected endpoint.</p>
			</AuthenticatedTemplate>

			<UnauthenticatedTemplate>
				<p>You've not logged in yet, log in to access the protected enpoint.</p>
			</UnauthenticatedTemplate>
			<UnprotectedComponent />
		</Container>
	)
}