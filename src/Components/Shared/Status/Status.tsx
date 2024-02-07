interface IProps {
	name: string;
}

const Status: React.FC<IProps> = props => {
	const { name } = props;
	return (
		<>
			<div>Status</div>
			<div>{name}</div>
		</>
	);
};

export default Status;
