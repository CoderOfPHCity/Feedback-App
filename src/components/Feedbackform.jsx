
import feedbackContext from './context/feedbackContext'
import Card from './Card'
import React, {useState, useContext, useEffect } from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

function Feedbackform() {
   
    const {feedEdit, upDatefeed, addFeed } = useContext(feedbackContext);
    const [text, setfeedForm] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [msg, setmsg] = useState('')
    const [rating, setRating] = useState(5)

  

    useEffect(() =>{
      if(feedEdit.edit === true) {
        setbtnDisabled(false)
        setfeedForm(feedEdit.item.text)
        setRating(feedEdit.item.rating)
      }
    }, [feedEdit])

    const handleText = (e) => {

        if(text === ''){
          setbtnDisabled(true)
          setmsg(null)
        }else if(text !== '' && text.trim().length <= 10){
        setmsg('Text must me hyigher than 10 characters')
        setbtnDisabled(true)
      
      }else{
        setmsg(null)
        setbtnDisabled(false)
      }

        setfeedForm(e.target.value)
    } 

    const handleSubmit = (e) =>{
      e.preventDefault()
      if (text.trim().length > 10){
        const newFeedback = {
          text,
          rating,
        }
        if(feedEdit.edit ===true){
          upDatefeed(feedEdit.item.id, newFeedback)
          
        }
        else {
             addFeed(newFeedback)
          }
        
       

        setfeedForm('')

        
      }
        
    }




  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you like to get this service</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className='input-group'>
                <input
                onChange={handleText}
                value = {text} 
                type="text" 
                placeholder='Write a review' />
            <Button type='Submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {msg && <div className='msg'>{msg}</div>}
        </form>

    </Card>
  )
}

export default Feedbackform