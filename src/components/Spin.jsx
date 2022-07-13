import { Spinner } from "react-bootstrap";

export const Spin = ({ height }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: height }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
