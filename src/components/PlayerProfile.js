import React, { useEffect, useState } from 'react' 
import { useHistory } from 'react-router-dom'
import Football from './images/football-player.png'


const PlayerProfile=()=>{

    const history = useHistory();
    const [playerDetails, setPlayerDeatils] = useState({});

    useEffect(()=>{
        setPlayerDeatils(history.location.state.state)
        console.log(history.location.state) 
    },[])




    return(
        <div className='mainDiv playerMainDiv'>

            <div className='svgDiv'>
                <img src={Football} height='350px' width='350px'></img>
            </div>

            <div className='porfileDiv'>
            <div className='gridContainer detailList'>
                {Object.keys(playerDetails).map((item)=>{
                    return <div className="gridItem"><span className='disColor'>{item}</span> : &nbsp; {playerDetails[item]} </div>

                })}
            </div>
                 
            </div>

        </div>  
    )
}

export default PlayerProfile;