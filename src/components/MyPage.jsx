import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_user_favorite } from "../redux/users/util";
import Test from "./Test";

const Andex = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((store) => store.users.user_id);
  const favorites = useSelector((store) => store.users.favoriteArtist);
  const result = favorites.map((obj) => <Test name={obj.artist_name} />);
  useEffect(() => {
    dispatch(get_user_favorite(user_id));
  }, []);

  return (
    <>
      <div>
        <h2>あなたがお気に入りをしたアーティスト達</h2>
        <div
          style={{
            display: "flex",
            width: "100vw",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {result}
        </div>
      </div>
    </>
  );
};

export default Andex;
