function UserGreeting(props) {
	return <h1>{`Welcome back ${props.user.firstName}!`}</h1>;
}

function GuestGreeting() {
	return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	return props.user ? <UserGreeting user={props.user} /> : <GuestGreeting />;
}

export default Greeting;
