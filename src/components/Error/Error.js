import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="Error">
      <h1>404</h1>
      <p>page not found</p>
      <div className="backHome">
        <Link to="/">back home</Link>
      </div>
    </div>
  );
};

export default Error;
