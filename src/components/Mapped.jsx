import { MapDiv } from "../styles/mapStyles";

export const Mapped = () => {
  return (
    <MapDiv>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3324.3717074147107!2d-70.62996!3d-33.569697!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1657763727167!5m2!1ses!2sco"
        width={600}
        height={450}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapDiv>
  );
};
