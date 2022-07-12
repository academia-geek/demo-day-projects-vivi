import { Route, Routes } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<div>Home</div>} />
      </Routes>
    </>
  );
};
