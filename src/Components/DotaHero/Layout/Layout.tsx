import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Spinner, TextInfo } from '../../Shared';
import { getDotaHeroLastMatches, getDotaHeroes } from '../../../store/dota/sagaActions';
import { dotaHeroMatches, dotaHeroes, dotaLoading } from '../../../store/dota/selectors';
import { API_DOTA_IMAGES } from '../../../constants/api';
import { DotaHeroLastMatch } from '../../../store/dota/types';
import StatisticItem from './StatisticItem';

const Layout: React.FC = () => {
	const { id } = useParams<{ id: string }>();

	const dispatch = useAppDispatch();
	const heroes = useAppSelector(dotaHeroes);
	const heroData = useAppSelector(dotaHeroMatches);
	const loading = useAppSelector(dotaLoading);

	const selectedHero = id ? heroes.find(hero => hero.id === +id) : undefined;

	useEffect(() => {
		if (selectedHero && id) {
			dispatch(getDotaHeroLastMatches(+id));
		}
	}, [dispatch, id, selectedHero]);

	useEffect(() => {
		if (!heroes.length) {
			dispatch(getDotaHeroes());
		}
	}, [dispatch, heroes]);

	return (
		<>
			{loading && <Spinner />}
			<Box sx={{ padding: '0.5rem', backgroundColor: 'rgb(17, 17, 17)', minWidth: '60rem' }}>
				<Box
					sx={{
						display: 'flex',
						minHeight: '48.4rem',
						maxHeight: '100%',
						flexWrap: 'wrap'
					}}
				>
					{selectedHero && (
						<Box
							sx={{
								display: 'flex',
								width: '100%',
								justifyContent: 'space-around',
								marginBottom: '2rem',
								height: '10rem'
							}}
						>
							<Box sx={{ display: 'flex' }}>
								<img
									src={`${API_DOTA_IMAGES}${selectedHero.img}`}
									alt={`${selectedHero.localized_name}`}
									style={{
										width: '15rem',
										height: '10rem',
										borderRadius: '25px',
										marginRight: '1rem'
									}}
								/>
								<Box>
									<Typography sx={{ marginBottom: '1rem' }}>
										{selectedHero.localized_name}
									</Typography>
									<Typography sx={{ marginBottom: '1rem' }}>
										{selectedHero.attack_type} - {selectedHero.roles.join(', ')}
									</Typography>
									<Box sx={{ display: 'flex' }}>
										<Typography>
											<span
												style={{
													content: '""',
													width: '10px',
													height: '10px',
													backgroundColor: 'red',
													borderRadius: '50%',
													display: 'inline-block',
													margin: '0 5px 0 0'
												}}
											/>
											{selectedHero.base_str} + {selectedHero.str_gain}
										</Typography>
										<Typography>
											{' '}
											<span
												style={{
													content: '""',
													width: '10px',
													height: '10px',
													backgroundColor: 'green',
													borderRadius: '50%',
													display: 'inline-block',
													margin: '0 5px 0 10px'
												}}
											/>{' '}
											{selectedHero.base_agi} + {selectedHero.agi_gain}
										</Typography>
										<Typography>
											{' '}
											<span
												style={{
													content: '""',
													width: '10px',
													height: '10px',
													backgroundColor: 'aqua',
													borderRadius: '50%',
													display: 'inline-block',
													margin: '0 5px 0 10px'
												}}
											/>{' '}
											{selectedHero.base_int} + {selectedHero.int_gain}
										</Typography>
									</Box>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', padding: '0 1rem' }}>
								<Box sx={{ width: '10rem', paddingRight: '0.5rem', borderRight: '1px solid grey' }}>
									<Typography>ATTACK</Typography>
									<TextInfo
										label='Damage:'
										description={`${selectedHero.base_attack_min + selectedHero.base_agi} -
										${selectedHero.base_attack_max + selectedHero.base_agi}`}
									/>
									<TextInfo
										label='Attack Speed:'
										description={`${selectedHero.base_attack_time + selectedHero.base_agi}`}
									/>
									<TextInfo
										label='Attack Range:'
										description={`${selectedHero.base_attack_time + selectedHero.base_agi}`}
									/>
									<TextInfo label='Move Speed:' description={`${selectedHero.move_speed}`} />
									<TextInfo label='Spell Amp:' description={`${selectedHero.base_mr}`} />
									<TextInfo label='Mana Regen:' description={`${selectedHero.base_mana_regen}`} />
								</Box>
								<Box sx={{ width: '10rem', paddingLeft: '0.5rem' }}>
									<Typography>DEFENSE</Typography>
									<TextInfo label='Armor:' description={`${selectedHero.base_armor}`} />
									<TextInfo label='Physical Resist:' description={`${selectedHero.base_mr}`} />
									<TextInfo label='Magic Resist:' description={`${selectedHero.base_mr}%`} />{' '}
									<TextInfo label='Status Resist:' description='0%' />
									<TextInfo label='Evasion:' description='0%' />
									<TextInfo
										label='Health Regen:'
										description={`${selectedHero.base_health_regen}`}
									/>
								</Box>
							</Box>
						</Box>
					)}

					{heroData.map((item: DotaHeroLastMatch) => (
						<Box
							key={item.match_id}
							sx={{
								width: '30%',
								flexGrow: 1,
								color: 'white',
								textDecoration: 'none',
								margin: '0 2rem 1rem'
							}}
						>
							<StatisticItem item={item} />
						</Box>
					))}
				</Box>
			</Box>
		</>
	);
};

export default Layout;
