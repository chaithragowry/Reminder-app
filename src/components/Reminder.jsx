import './reminder.css'
import { useState } from 'react';

function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handleInputChange=(event)=> {
    setNewReminder(event.target.value)
  }

  const handleAddReminder =() => {
    if(newReminder.trim()){
      setReminder([...reminder,newReminder])
      setNewReminder("")
    }
  }


  const handleDelete = (index)=> {
    setReminder(reminder.filter((item,itemIndex)=> itemIndex != index))
  }
  return (
    <div className="container">
      <h1>Reminder</h1>
      <div className='input-conainer'>
        <input type='text' 
        value={newReminder}
        placeholder='Enter a reminder'
        onChange={handleInputChange}
        />
        <button 
        className='add-btn'
        onClick={handleAddReminder}>Add Reminder</button>
      </div>
      {
        reminder.length > 0 ? (
        <ul className='reminder-list'>
        {
          reminder.map((reminder,index)=>(
            <li key={index}>
              {reminder}
              <button onClick={()=>handleDelete(index)} className='deletebtn'>Delete</button>
            </li>
          ))
        }
      </ul>) : <p>No reminders found</p>

      }
      
    </div>
  )
}
export default Reminder