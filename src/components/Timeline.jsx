import Rating from "@mui/material/Rating";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAllPosts } from "../redux/actions/infoAction";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import { Link } from "react-router-dom";
import { CONT } from "../styles/globalStyles";

export const Timeline = () => {
  const dispatch = useDispatch();
  const { listaPosts } = useSelector((store) => store.posts);
  const userData = listaPosts[0];
  console.log(userData)

  useEffect(() => {
    dispatch(listAllPosts());
  }, []);

  return (
    <>
      <CONT>
        {userData?.splice(0, 5).map((i) => (
            <DivPosting>
              <Userbar>
                <div>
                  <div className="user">
                    <Avatar src={i.photo} alt={i.name} />
                    <div className="d-flex flex-column">
                      <span>{i.name}</span>
                      <span className="time">{i.time}</span>
                    </div>
                  </div>
                </div>
              </Userbar>
              <DivPost>
                <div>
                  <img src={i.pic} alt={i.place} />
                </div>
                <div className="comment">
                  <div>
                    <Stack spacing={1}>
                      <Rating name="read-only" value={i.rate} readOnly />
                    </Stack>
                    <p>{i.posttext}</p>
                  </div>
                  <Link to={`/map/${i.place}`}>{i.place}</Link>
                </div>
              </DivPost>
            </DivPosting>
          ))}
      </CONT>
    </>
  );
};
