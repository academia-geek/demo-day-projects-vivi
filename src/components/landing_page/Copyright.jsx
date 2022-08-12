import { Copy } from "../../styles/landingStyles";

export const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <Copy className="mt-3 d-flex justify-content-center align-items-end">
      <p>&copy; {year} ViVi. Todos los derechos reservados.</p>
    </Copy>
  );
};
