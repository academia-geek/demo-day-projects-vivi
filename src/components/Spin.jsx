import { Spinner } from "react-bootstrap";

export const Spin = ({ heightPx }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: heightPx }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
