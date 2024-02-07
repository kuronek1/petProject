import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface IProps {
	name: string;
	icon: string;
	url: string;
}

const LinkIconButton: React.FC<IProps> = props => {
	const { name, icon, url } = props;
	return (
		<Box>
			<img src={icon} alt={`${name}`} />
			<Link className='heroLink' to={url}>
				{name}
			</Link>
		</Box>
	);
};

export default LinkIconButton;
