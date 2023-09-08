import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export default function Home() {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="text-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h4>Welcome to Page in React</h4>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn-info btn-sm m-1">
            Home
          </Link>
          <Link to="/tasks" className="btn btn-info btn-sm m-1">
            Tasks
          </Link>
        </div>
      </div>
    </>
  );
}
