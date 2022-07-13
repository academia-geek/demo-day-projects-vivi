import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import post from "../assets/carousel2.png";
import { useState } from "react";

export const Timeline = () => {
  const [value, setValue] = useState(5);
  return (
    <DivPosting>
      <Userbar>
        <div>
          <Avatar src="https://i.pravatar.cc/300" alt="avatar" />
          <span>Melisa Mendoza</span>
        </div>
        <span>11/7/2022 16:34</span>
      </Userbar>
      <DivPost>
        <div>
          <img src={post} />
        </div>
        <div className="comment">
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Stack>
          <p>
            La celebración fue muy divertida y bonita. Conocí grandes personas,
            en especial una señora que me llevó a conocer la ciudad y degustar
            comidas exquisitas.
          </p>
          <a>Plaza San Pedro Claver, Cartagena de Indias</a>
        </div>
      </DivPost>
    </DivPosting>
  );
};
