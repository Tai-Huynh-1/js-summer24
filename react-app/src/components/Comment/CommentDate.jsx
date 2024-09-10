function formatDate(date) {
	return date.toLocaleTimeString();
}

function CommentDate(props) {
	return <div className="Comment-date">{formatDate(props.date)}</div>;
}

export default CommentDate;
