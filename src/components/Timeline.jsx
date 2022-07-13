import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { DivPosting } from "../styles/postingStyles";
import carousel3 from "../assets/carousel3.jpg";
import { useState } from "react";

export const Timeline = () => {
  const [value, setValue] = useState(2);
  return (
    <DivPosting>
      <div>
        <div>
          <Avatar src="https://i.pravatar.cc/300" alt="avatar" />
          <span>Melisa Mendoza</span>
        </div>
        <span>11/7/2022 16:34</span>
      </div>
      <div>
        <div>
          <img src={carousel3} />
        </div>
        <div>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </div>
      </div>
    </DivPosting>
  );
};
