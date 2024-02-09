import { Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { Routes, sidebarRoutes } from '../../../constants/routes';

interface IProps {
	children?: React.ReactNode;
	breadCrumbs: string;
}

const ContentWrapper: React.FC<IProps> = (props): JSX.Element => {
	const { children, breadCrumbs } = props;
	const { pathname } = useLocation();

	return (
		<Box
			sx={{
				display: 'flex',
				bgcolor: 'black',
				color: 'white',
				minHeight: '100vh',
				minWidth: '100%'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					bgcolor: '#44195e',
					width: '10rem',
					color: 'white',
					minHeight: '100%'
				}}
			>
				<Box
					sx={{
						padding: '1rem 2rem'
					}}
				>
					<Link style={{ textDecoration: 'none', color: 'white' }} to={Routes.dashboard}>
						+ LOGO +
					</Link>
				</Box>
				{sidebarRoutes.map(item => (
					<Box key={item.id} sx={{ padding: '1rem 2rem' }}>
						<Link
							to={item.url}
							style={{
								textDecoration: 'none',
								color: pathname === item.url ? 'yellow' : 'white',
								fontSize: 'large',
								fontWeight: 600
							}}
						>
							{item.label}
						</Link>
					</Box>
				))}
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<Box
					sx={{
						height: '5vh',
						bgcolor: '#feea01',
						display: 'flex',
						alignItems: 'center',
						paddingLeft: '2rem',
						color: 'black',
						fontSize: 'large',
						fontWeight: 700
					}}
				>
					{breadCrumbs}
				</Box>
				<Box
					sx={{
						padding: '2rem',
						height: '100%',
						width: '100%',
						flexGrow: 1
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default ContentWrapper;
