import { Box, Typography } from '@mui/material';

interface IProps {
	label: string;
	description: string;
}

const TextInfo: React.FC<IProps> = props => {
	const { label, description } = props;

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
			<Typography sx={{ color: 'grey', fontWeight: 600, fontSize: '0.9rem' }}>{label}</Typography>
			<Typography sx={{ color: 'white', fontWeight: 500, fontSize: '0.9rem' }}>
				{description}
			</Typography>
		</Box>
	);
};

export default TextInfo;
