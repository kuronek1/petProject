import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getDotaHeroes } from '../../../store/dota/sagaActions';
import { dotaHeroes } from '../../../store/dota/selectors';
import { Routes } from '../../../constants/routes';
import { DotaHero } from '../../../store/dota/types';
import { API_DOTA_IMAGES } from '../../../constants/api';
import './styles.css';
import LinkIconButton from '../../Shared/LinkIconButton';

const Layout: React.FC = () => {
	const [state, setState] = useState(0);
	const dispatch = useAppDispatch();
	const heroes = useAppSelector(dotaHeroes);

	const handleClick = () => {
		setState(prev => prev + 1);
	};

	useEffect(() => {
		if (state === 1) {
			dispatch(getDotaHeroes());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state]);

	return (
		<Box className='wrapperLayout'>
			<Button onClick={handleClick}>DOTA 2 PAGE</Button>
			<Box className='heroItems'>
				{heroes.map((item: DotaHero) => (
					<Box
						key={item.id}
						sx={{
							minWidth: '15%',
							maxWidth: '15%',
							flexGrow: 1,
							color: 'cyan',
							textDecoration: 'none'
						}}
					>
						<LinkIconButton
							name={item.localized_name}
							icon={`${API_DOTA_IMAGES}${item.img}`}
							url={`${Routes.dotaHero}/${item.id}/${item.localized_name}`}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Layout;
