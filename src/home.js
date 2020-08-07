import React from 'react';
import { connect } from 'react-redux';

const Home = ({ isLogged }) => {
	console.log(isLogged);
	return (
		<>
			<p>IsLogged : {isLogged ? 'true' : 'false'}</p>
			<p>hello, {isLogged ? 'user' : 'nobody'}</p>
		</>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		isLogged: auth,
	};
};

export default connect(mapStateToProps, null)(Home);
