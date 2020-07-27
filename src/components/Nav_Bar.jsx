import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { HashRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  button: { fontSize: "1.5em", color: "palevioletred", margin: "20px" },
  item: {
    color: "palevioletred",
    textAlign: "center",
    width: "200px",
    fontSize: "20px",
  },
});

const Index = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const style = useStyle();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: "300px" }}>
      <Button
        className={style.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        className={style.Menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/`}>
          <MenuItem className={style.item} onClick={handleClose}>
            Top
          </MenuItem>
        </Link>
        <Link to={`/acount`}>
          <MenuItem className={style.item} onClick={handleClose}>
            My account
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Index;
