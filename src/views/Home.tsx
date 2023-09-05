import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="container text-center mt-5">
                <h4>Welcome to Page in React</h4>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-info btn-sm m-1">Home</Link>
                    <Link to="/tasks" className="btn btn-info btn-sm m-1">Tasks</Link>
                </div>
            </div>
        </>
    )
}