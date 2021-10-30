import React, { useEffect, useState } from 'react' 
import '../styles.css'
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import {GrNext} from 'react-icons/gr'



const SearchPage = ()=>{

    const localData = [
        {
          "Name": "L. Messi",
          "Age": 31,
          "Nationality": "Argentina",
          "Overall": 94,
          "Club": "FC Barcelona",
          "Value": "€110.5M",
          "Wage": "€565K",
          "Preferred Foot": "Left",
          "Work Rate": "Medium/ Medium",
          "Position": "RF",
          "Jersey Number": 10,
          "Joined": "1-Jul-04",
          "Contract Valid Until": 2021,
          "Height": "5'7",
          "Weight": "159lbs",
          "Crossing": 84,
          "Finishing": 95,
          "HeadingAccuracy": 70,
          "ShortPassing": 90,
          "Volleys": 86
        },
        {
          "Name": "Cristiano Ronaldo",
          "Age": 33,
          "Nationality": "Portugal",
          "Overall": 94,
          "Club": "Juventus",
          "Value": "€77M",
          "Wage": "€405K",
          "Preferred Foot": "Right",
          "Work Rate": "High/ Low",
          "Position": "ST",
          "Jersey Number": 7,
          "Joined": "10-Jul-18",
          "Contract Valid Until": 2022,
          "Height": "6'2",
          "Weight": "183lbs",
          "Crossing": 84,
          "Finishing": 94,
          "HeadingAccuracy": 89,
          "ShortPassing": 81,
          "Volleys": 87
        },
        {
          "Name": "Neymar Jr",
          "Age": 26,
          "Nationality": "Brazil",
          "Overall": 92,
          "Club": "Paris Saint-Germain",
          "Value": "€118.5M",
          "Wage": "€290K",
          "Preferred Foot": "Right",
          "Work Rate": "High/ Medium",
          "Position": "LW",
          "Jersey Number": 10,
          "Joined": "3-Aug-17",
          "Contract Valid Until": 2022,
          "Height": "5'9",
          "Weight": "150lbs",
          "Crossing": 79,
          "Finishing": 87,
          "HeadingAccuracy": 62,
          "ShortPassing": 84,
          "Volleys": 84
        },
        {
          "Name": "De Gea",
          "Age": 27,
          "Nationality": "Spain",
          "Overall": 91,
          "Club": "Manchester United",
          "Value": "€72M",
          "Wage": "€260K",
          "Preferred Foot": "Right",
          "Work Rate": "Medium/ Medium",
          "Position": "GK",
          "Jersey Number": 1,
          "Joined": "1-Jul-11",
          "Contract Valid Until": 2020,
          "Height": "6'4",
          "Weight": "168lbs",
          "Crossing": 17,
          "Finishing": 13,
          "HeadingAccuracy": 21,
          "ShortPassing": 50,
          "Volleys": 13
        },
        {
          "Name": "K. De Bruyne",
          "Age": 27,
          "Nationality": "Belgium",
          "Overall": 91,
          "Club": "Manchester City",
          "Value": "€102M",
          "Wage": "€355K",
          "Preferred Foot": "Right",
          "Work Rate": "High/ High",
          "Position": "RCM",
          "Jersey Number": 7,
          "Joined": "30-Aug-15",
          "Contract Valid Until": 2023,
          "Height": "5'11",
          "Weight": "154lbs",
          "Crossing": 93,
          "Finishing": 82,
          "HeadingAccuracy": 55,
          "ShortPassing": 92,
          "Volleys": 82
        }
      ]

    const [termtoSearch, setTermToSearch] = useState('');
    const history = useHistory();

    const onChangeHandler=(e)=>{
        setTermToSearch(e.target.value);
    }
    
    const onClickhandler=()=>{
        console.log("clicked")
    }

    const onPlayerClick=(item)=>{
        history.push({
            pathname:'/player-profile',
            state:{state:item}
        })
    }
    

    return(
        <div className='mainDiv'>
            <div className="seachBar">   
                <h1>SEARCH A <span style={{color:'#1077C3'}}>F</span><span style={{color:'#49BCE3'}}>I</span><span style={{color:'#FEC310'}}>F</span><span style={{color:'#FF0000'}}>A</span> PLAYER</h1>
            </div>
            <div className='box'>
                <input type='text' placeholder='Search...' onChange={onChangeHandler}></input>
                <button onClick={onClickhandler} className='searchIcon'>
                <AiOutlineSearch/>
                </button>
            </div>
            <div className='namesDiv'>
            {localData.filter((item)=>{
                if(item==''){
                    return item;
                }
                else if(item.Name.toLocaleLowerCase().includes(termtoSearch.toLowerCase()) || item.Nationality.toLowerCase().includes(termtoSearch.toLowerCase()) || item.Club.toLowerCase().includes(termtoSearch.toLowerCase()) ){
                    return item.Name
                }
            }).map((item)=>{
                if(termtoSearch.length !=0){
                   return <button id='playerBtn' onClick={()=>onPlayerClick(item)} className='playerButtons'>{item.Name}</button>
                }
                // <button id='playerBtn' onClick={()=>onPlayerClick(item)} className='playerButtons'>{item.Name}</button>
            })}
            </div>
        </div>
    )
}

export default SearchPage;

// search using name, nationality and club