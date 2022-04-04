export default function FilteredLaunches({launch}){

    let {flight_number,mission_name, launch_year} = launch;

return(
<div>

    {
        <p>{flight_number} {mission_name} {launch_year}</p>
    }

</div>

)
}