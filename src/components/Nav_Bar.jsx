import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  HashRouter as Router,
  Link,
  useRouteMatch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { log_out } from "../redux/users/actions";

const useStyle = makeStyles((theme) => ({
  button: {
    fontSize: "2em",
    color: "palevioletred",
    margin: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
      margin: "10px",
    },
  },
  item: {
    color: "palevioletred",
    textAlign: "center",
    width: "200px",
    fontSize: "20px",
  },
}));

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const style = useStyle();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutFunc = () => {
    localStorage.clear();
    dispatch(log_out());
    history.push("/");
  };

  return (
    <div>
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
            Favorite Artists
          </MenuItem>
        </Link>
        <MenuItem className={style.item} onClick={logOutFunc}>
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Index;
