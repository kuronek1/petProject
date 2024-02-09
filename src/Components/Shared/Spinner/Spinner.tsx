import { Box, CircularProgress } from '@mui/material';

const Spinner: React.FC = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'fixed',
				zIndex: 999,
				backgroundColor: 'black',
				opacity: '90%'
			}}
		>
			<CircularProgress size='5rem' color='secondary' />
		</Box>
	);
};

export default Spinner;
