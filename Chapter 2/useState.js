import React from 'react'

function training() {
  const [events, setEvents] = useState([
    {title: "happy birthday", id:1},
    {title:"work day", id:2}
  ])

  return (
    <div >{events.map((event) => (
      <div key={event.id}>
        <h2>{event.title}</h2> 
      </>
    ))}
    </div>
  )
}

export default training