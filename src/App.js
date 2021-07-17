//dependencies
import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
//components
import Navbar from './components/global/navbar/Navbar';
import HomePage from './components/layouts/HomePage/HomePage';
import UniversitiesPage from './components/layouts/UniversitiesPage/UniversitiesPage';
// styles
import './styles/main.scss';
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { setUserInfo } from './actions/user_info_actions';

const App = () => {

	const { userName } = useSelector(state => state.userInfoReducer);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		if (userName) {
			history.push('/universities');
		}
	}, [userName]);

	useEffect(() => {
		const userName = localStorage.getItem('checkmarxUniversityUser');
		if (userName) {
			dispatch(setUserInfo(userName));
		}
	}, []);

	return (
		<>
			<Navbar />
			<Switch>
				{userName ?
					<Route
						path="/universities"
						render={() => <UniversitiesPage />}
					/>
					:
					null
				}
				<Route path="/" render={() => <HomePage />} />
			</Switch>
		</>
	)
}

export default App;
