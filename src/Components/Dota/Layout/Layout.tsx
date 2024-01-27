import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getDotaHeroes } from "../../../store/dota/sagaActions";
import { dotaHeroes } from "../../../store/dota/selectors";
import { DotaHero } from "../../../store/dota/types";
import { Link } from "react-router-dom";
import { Routes } from "../../../constants/routes";

import './styles.css'

const Layout: React.FC = () => {
  const [state, setState] = useState(0);
  const dispatch = useAppDispatch();
  const heroes = useAppSelector(dotaHeroes)
  const handleClick = () => {
    setState(prev => prev + 1)
  }

  useEffect(() => {
    if (state === 1) {
      dispatch(getDotaHeroes({}))

    }
  }, [state])

  return (
    <Box>
      <Typography>DOTA 2 PAGE</Typography>
      <Typography>{state}</Typography>
      <Button onClick={handleClick}>+1</Button>
      <Box className='heroItems'>
        {heroes.map((item: DotaHero) => (
          <Box key={item.id}>
            <Link className="heroItem" to={`${Routes.dotaHero}${item.id}`}>{item.localized_name}</Link>
            <br />
          </Box>
        ))}
      </Box>
    </Box >
  )
};

export default Layout;