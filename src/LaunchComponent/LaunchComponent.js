import {useEffect, useState} from "react";
import FilteredLaunches from "./FilteredLaunches";

export default function LaunchComponent(){

    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value))

    }, []);

return(
<div>
    {
        launches.map(launch => {
            console.log(launch);
            if (launch.launch_year <= 2019){
               return  <FilteredLaunches key={launch.flight_number} launch={launch}/>
            }
        })

    }
</div>

)};