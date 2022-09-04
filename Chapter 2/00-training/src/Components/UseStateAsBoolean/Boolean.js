import React, {useState} from 'react';

function Boolean() {
  const [showEvents, setShowEvents] = useState(false)
  const [events, setEvents] = useState([
    {title: "mario's birthday today", id:1},
    {title:"my birthday is tomorow", id:2}
  ])

  const handleClick = (clickedID) => {
    // here we will filter the events array to delete the element clicked
    setEvents(events.filter((event) => {
      // if the element clicked id exist on the array, then take it out, if not return the array
      // so when we click on a button, it will take the id and compare it to the array if there is an id equal to it, if so take it out 
      return clickedID !== event.id
    }))
    console.log(clickedID);
  }

  return (
    <div className='app'>
      <div>
        <button onClick={()=> setShowEvents(false)}>Show</button>
      </div>
      <div>
        <button onClick={()=> setShowEvents(true)}>Hide</button>
      </div>
      {!showEvents && events.map((event, index) => (
      <div key={event.id}>
        <h2>{index}- {event.title}</h2>
        <button onClick={() => handleClick(event.id)}>Delete event</button>
      </div>
      ))}
      <a href='/'><button> Back</button></a>
    </div>
  );
}

export default Boolean;