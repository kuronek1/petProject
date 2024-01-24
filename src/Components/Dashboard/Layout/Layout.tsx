import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Layout: React.FC = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(prev => prev + 1)
  }

  return (
    <Box>
      <Typography>DASHBOARD</Typography>
      <Typography>{state}</Typography>
      <Button onClick={handleClick}>+1</Button>
    </Box>
  )
};

export default Layout;