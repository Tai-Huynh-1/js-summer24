function Avatar(props) {
	const { user } = props;
	return <img className="Avatar" src={user.avatarUrl} alt={user.name} />;
}

export default Avatar;
