import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllChirps from './AllChirps';
import SingleChirp from './SingleChirp';
import AddChirp from './AddChirp';
import Nav from './Nav';

import './scss/app';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	render() {
		return (
			<main className="container my-5">
				<Router>
					<Nav />
					<Switch>
						<Route exact path='/' component={AllChirps} />
						<Route exact path='/:id/admin' component={SingleChirp} />
						<Route exact path="/addChirp" component={AddChirp} />
					</Switch>
				</Router>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;