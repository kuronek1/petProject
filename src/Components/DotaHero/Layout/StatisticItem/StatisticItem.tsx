import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { DotaHeroLastMatch } from '../../../../store/dota/types';

interface IProps {
	item: DotaHeroLastMatch;
}

const StatisticItem: React.FC<IProps> = ({ item }) => {
	const getStatusName = (item: any) => {
		return item.radiant
			? item.radiant_win
				? 'Victory'
				: 'Lose'
			: !item.radiant_win
				? 'Victory'
				: 'Lose';
	};

	return (
		<Box>
			<Typography>K/D/A:{` ${item.kills}/${item.deaths}/${item.assists}`}</Typography>
			<Typography>Duration: {moment.utc(item.duration * 1000).format('mm:ss')}</Typography>
			<Typography>League name: {item.league_name}</Typography>
			<Typography>Team: {item.radiant ? 'Radiant' : 'Dire'}</Typography>
			<Typography>Total: {getStatusName(item)}</Typography>
		</Box>
	);
};
export default StatisticItem;
