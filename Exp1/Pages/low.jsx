import logs from "./logs.js";
const Low=()=>{
    return(
        <div>
            <h2 >Low Carbon Emission</h2>
            <ul id="low">
                {
                logs.filter((log)=>log.carbon<4).map((log)=>(
            <li key={log.id}>
            {log.activity}={log.carbon}
            </li>))}
            </ul>
        </div>
    )
};
export default Low;