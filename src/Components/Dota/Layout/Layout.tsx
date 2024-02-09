import { useEffect } from 'react';
import { Box } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Spinner, LinkIconButton } from '../../Shared';
import { getDotaHeroes } from '../../../store/dota/sagaActions';
import { dotaHeroes, dotaLoading } from '../../../store/dota/selectors';
import { Routes } from '../../../constants/routes';
import { DotaHero } from '../../../store/dota/types';
import { API_DOTA_IMAGES } from '../../../constants/api';

const Layout: React.FC = () => {
	const dispatch = useAppDispatch();
	const heroes = useAppSelector(dotaHeroes);
	const loading = useAppSelector(dotaLoading);

	useEffect(() => {
		dispatch(getDotaHeroes());
	}, [dispatch]);

	return (
		<>
			{loading && <Spinner />}
			<Box sx={{ padding: '0.5rem', backgroundColor: 'rgb(17, 17, 17)' }}>
				<Box sx={{ display: 'flex', minHeight: '48.4rem', maxHeight: '100%', flexWrap: 'wrap' }}>
					{[...heroes]
						.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
						.map((item: DotaHero) => (
							<Box
								key={item.id}
								sx={{
									margin: '0.5rem',
									minWidth: '6rem',
									maxWidth: '6rem',
									flexGrow: 1,
									color: 'white',
									textDecoration: 'none',
									transition: 'transform 0.25s',
									':hover': {
										transform: 'scale(1.1)'
									}
								}}
							>
								<LinkIconButton
									name={item.localized_name}
									icon={`${API_DOTA_IMAGES}${item.img}`}
									url={`${Routes.dotaHero}/${item.id}`}
								/>
							</Box>
						))}
				</Box>
			</Box>
		</>
	);
};

export default Layout;
