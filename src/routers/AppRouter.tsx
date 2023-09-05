import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskContainer from '../components/task/TaskContainer'
import Home from '../views/Home'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tasks" element={<TaskContainer/>}/>
            </Routes>
        </Router>
    )
}