import { Box } from "@mui/material"
import { Link, useLocation } from "react-router-dom";


import { Routes, sidebarRoutes } from "../../../constants/routes";
import './ContentWrapperStyles.css';

interface IProps {
  children?: React.ReactNode
  breadCrumbs: string
}

const ContentWrapper: React.FC<IProps> = (props): JSX.Element => {
  const { children, breadCrumbs } = props;

  const { pathname } = useLocation();

  return (
    <Box className="wrapper">
      <Box className='sidebar'>
        <Box className='sidebarItem'>
          <Link className="route" to={Routes.dashboard} >+ LOGO +</Link>
        </Box>
        {sidebarRoutes.map((item) => (
          <Box key={item.id} className='sidebarItem'>
            <Link className={pathname === item.url ? 'activeRoute' : 'route'} to={item.url} key={item.id}>{item.label}</Link>
          </Box>
        ))}
      </Box>
      <Box className='contentWrapper'>
        <Box className='header'>{breadCrumbs}</Box>
        <Box className='children'>{children}</Box>
      </Box>
    </Box>
  )
};

export default ContentWrapper;