// create your App component here
import React, {useState, useEffect} from 'react';

function App(){
    const[dogs, setDogs]= useState(null);

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response)=>response.json())
        .then((data)=>{
            setDogs(data.message)
        })
    }, [])
    console.log(dogs)
    if(!dogs) return <p>Loading...</p>;
    return(
        <div>
            <img alt="A Random Dog" src={dogs}/>
            
        </div>
    )
}
export default App;