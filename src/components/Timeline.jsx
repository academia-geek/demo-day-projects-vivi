import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { DivPost, DivPosting, Userbar } from "../styles/postingStyles";
import post from "../assets/carousel2.png";
import { Link } from "react-router-dom";

export const Timeline = () => {
  const place = "Plaza San Pedro Claver, Cartagena de Indias";
  return (
    <DivPosting>
      <Userbar>
        <div>
          <Avatar src="https://i.pravatar.cc/300" />
          <span>Melisa Mendoza</span>
        </div>
        <span>11/7/2022 16:34</span>
      </Userbar>
      <DivPost>
        <div>
          <img src={post} />
        </div>
        <div className="comment">
          <div>
            <Stack spacing={1}>
              <Rating
                name="read-only"
                value={4}
                readOnly
              />
            </Stack>
            <p>
              La celebración fue muy divertida y bonita. Conocí grandes personas,
              en especial una señora que me llevó a conocer la ciudad y degustar
              comidas exquisitas.
            </p>
          </div>
          <Link to={`/map/${place}`}>{place}</Link>
        </div>
      </DivPost>
    </DivPosting>
  );
};
