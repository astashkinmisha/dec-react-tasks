export default function FilteredLaunches({launch}) {

    let {flight_number, mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div>
            {
                <div>
                    <p>{flight_number} {mission_name} {launch_year}</p>
                    <img src={mission_patch_small} alt={'pic'}/>
                </div>

            }
        </div>
    );
};