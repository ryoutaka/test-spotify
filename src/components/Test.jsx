import React from "react";
import { useSearch } from "react-spotify-api";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import PlayWidget from "react-spotify-widgets";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Widget = styled.div`
  width: 300px;
  height: 380px;
  margin: 0 auto;
`;

const Index = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { name } = props;
  const { data } = useSearch(name, {
    artist: true,
    limit: 1,
  });

  return (
    <>
      {data ? (
        <div>
          <h3>{data.artists.items[0].name}</h3>
          <img
            onClick={handleOpen}
            src={data.artists.items[0].images[1].url}
          ></img>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Widget>
                  <PlayWidget
                    width={300}
                    height={380}
                    uri={data.artists.items[0].uri}
                    lightTheme={true}
                  />
                </Widget>
              </div>
            </Fade>
          </Modal>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Index;
