import React from 'react'
import {useContext} from 'react'
import feedbackContext from './context/feedbackContext'

function FeedbackStats() {

    const { feedback } = useContext(feedbackContext);

    let average = Math.round(
      feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
    )


  return (
    <div className='feedback-stats'>

        <h3>{feedback.length} Reviews</h3>
        <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  )
}

export default FeedbackStats