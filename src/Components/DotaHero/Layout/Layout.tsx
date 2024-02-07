import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getDotaHeroLastMatches } from "../../../store/dota/sagaActions";
import { dotaHero } from "../../../store/dota/selectors";
import { DotaHeroLastMatch } from "../../../store/dota/types";

import './styles.css'
import { useParams } from "react-router-dom";
import moment from "moment";
import { Status } from "../../Shared";

const Layout: React.FC = () => {
  const [state, setState] = useState(0);

  const { id, name } = useParams<{ id: string, name: string }>();

  const dispatch = useAppDispatch();
  const heroData = useAppSelector(dotaHero)

  const handleClick = () => {
    setState(prev => prev + 1)
  }
  console.log(id)
  useEffect(() => {
    if (state === 1 && id) {
      dispatch(getDotaHeroLastMatches(+id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <Box className='wrapperLayout'>
      <Button onClick={handleClick}>DOTA 2 HERO PAGE</Button>
      <Box>{name}</Box>
      <Box className='heroItems'>
        {heroData.map((item: DotaHeroLastMatch) => (
          <Box key={item.match_id} className="heroItem">
            <Typography>K/D/A:{`${item.kills}/${item.deaths}/${item.assists}`}</Typography>
            <Typography>Duration: {moment.utc(item.duration * 1000).format('mm:ss')}</Typography>
            <Typography>League name: {item.league_name}</Typography>
            <Typography>Team: {item.radiant ? 'Radiant' : 'Dire'}</Typography>
            <Typography>Victory: {item.radiant_win ? 'Radiant' : 'Dire'}</Typography>
            <Status name='123' />
          </Box>
        ))}
      </Box>
    </Box >
  )
};

export default Layout;