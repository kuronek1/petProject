import { Box } from "@mui/material"
import { Link } from "react-router-dom";


import { sidebarRoutes } from "../../../constants/routes";

interface IProps {
  children?: React.ReactNode
}

const ContentWrapper: React.FC<IProps> = (props): JSX.Element => {
  const { children } = props;

  return (
    <Box>
      <Box>
        {sidebarRoutes.map((item) => (
          <Link to={item.url} key={item.id}>{item.label}</Link>
        ))}
      </Box>
      <Box>{children}</Box>
    </Box>
  )
};

export default ContentWrapper;