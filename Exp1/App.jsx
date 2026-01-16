
import './App.css'
import Dashboard from './Pages/dashboard.jsx';
import Logos from './Pages/high.jsx';
import Low from './Pages/low.jsx';
const App=()=>{
    return(
    <div>
        <h1 style={{background:"green",color:"white"}}>EcoTrack</h1>
    <Dashboard/>
    <Logos/>
    <Low/>
    </div>)
};
export default App;




