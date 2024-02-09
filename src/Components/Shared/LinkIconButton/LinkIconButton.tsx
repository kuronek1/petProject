import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProps {
	name: string;
	icon: string;
	url: string;
}

const LinkIconButton: React.FC<IProps> = props => {
	const { name, icon, url } = props;

	const navigate = useNavigate();

	const goToPage = () => {
		navigate(url);
	};

	return (
		<Box
			onClick={goToPage}
			sx={{ cursor: 'pointer', position: 'relative', display: 'flex', margin: '0.5rem' }}
		>
			<img src={icon} alt={`${name}`} style={{ width: '6rem' }} />
			<Typography
				sx={{
					position: 'absolute',
					zIndex: 100,
					bottom: '0',
					bgcolor: 'black',
					width: '6rem',
					opacity: '70%',
					textAlign: 'center',
					fontSize: '0.7rem',
					whiteSpace: 'nowrap'
				}}
			>
				{name}
			</Typography>
		</Box>
	);
};

export default LinkIconButton;
