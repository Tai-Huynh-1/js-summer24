function ListItem({ user }) {
	return (
		<li>
			<div>{user.firstName}</div>
		</li>
	);
}

function List(props) {
	const users = new Array(5).fill({ firstName: "Jack" }).map((user, idx) => ({ ...user, id: idx }));
	console.log("users", users);

	// will the idx be useful in identifying the objects in my list if they were shuffled
	const listItems = users.map((user) => <ListItem key={user.id} user={user} />);
	console.log(listItems);

	return <ul>{listItems}</ul>;
}

export default List;
