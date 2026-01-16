import logs from "./logs.js";
const Logos=()=>{
return(
    <div>
        <h2 >High Carbon Emission</h2>
        <ul id="high">
            {
              logs.filter((log)=>log.carbon>=4).map((log)=>(
            <li key={log.id}>
            {log.activity}={log.carbon}
            </li>
        ))
            }
        </ul>
    </div>
)};
export default Logos;