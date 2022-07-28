import React from 'react'
import {FaTimes,FaEdit} from 'react-icons/fa'
import Card from './components/Card'
import {useContext} from 'react'
import feedbackContext from './components/context/feedbackContext'

function FeedbackItem({item}) { 
  const {handleDel, editFeed} = useContext(feedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={() => handleDel(item.id)}>
          <FaTimes color='purple'/>

        </button>
        <button onClick={() => editFeed(item)} className='edit'><FaEdit color='purple' /> </button>
        <div className="text-display">{item.text}</div> 
      
    </Card>
  )
}

export default FeedbackItem
