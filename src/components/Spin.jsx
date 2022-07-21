import Spinner from 'react-bootstrap/Spinner';

export const Spin = ({ height }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: height, gap: "1rem", backgroundColor: "rgb(228, 235, 241)" }}
    >
      <Spinner animation="grow" size="sm" variant="warning" />
      <Spinner animation="grow" size="sm" variant="primary" />
      <Spinner animation="grow" size="sm" variant="danger" />
    </div>
  );
};
