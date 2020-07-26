import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { HashRouter as Router, Link, useRouteMatch } from "react-router-dom";

const Index = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/`}>
          <MenuItem onClick={handleClose}>Top</MenuItem>
        </Link>
        <Link to={`/acount`}>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Index;
