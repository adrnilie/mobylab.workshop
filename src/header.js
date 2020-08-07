import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from './redux-config/actions/auth';
import { connect } from 'react-redux';
import { Button } from 'antd';

const Header = ({ logoutUser, isLogged }) => {
	return (
		<div>
			<Link to='/'>Home</Link>
			{!isLogged && <Link to='/login'>Login</Link>}
			{isLogged && <Button onClick={logoutUser}>Logout</Button>}
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		isLogged: auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logoutUser: () => dispatch(logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
