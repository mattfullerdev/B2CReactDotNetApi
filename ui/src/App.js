import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Protected } from './pages/Protected';
import { TopNav } from './components/TopNav';
import { Home } from './pages/Home';

// MSAL imports
import { MsalProvider } from '@azure/msal-react';

function App({ pca }) {

	return (
		<Router>
			<MsalProvider instance={pca}>
				<TopNav />
				<Pages />
			</MsalProvider>
		</Router>
	);
}

function Pages() {
	return (
		<Switch>
			<Route path="/protected">
				<Protected />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	)
}

export default App;
