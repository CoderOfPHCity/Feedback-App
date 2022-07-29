import React, {createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
    const FeedbackContext = createContext({children:()=>{}});

export const Feedbackprovider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setfeedback] = useState([])

    const handleDel = (id) => {

        if (window.confirm('Do yo want to delete this feedback?')){
           setfeedback(feedback.filter((item) => item.id !== id))
        }
       
      }

      const [feedEdit, setfeedEdit] = useState({
          item: {},
          edit:false,

      })

      const editFeed =(item) =>{
          setfeedEdit({
              item,
              edit: true,
          })

      }

      const addFeed = (newFeedback) => {
        newFeedback.id = uuidv4()
        setfeedback([newFeedback, ...feedback])
        setIsLoading(false)
    
    
      } 
     const  upDatefeed = (id, upditem) =>{
            setfeedback(
             feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
         )
          
      }

    return(
        <FeedbackContext.Provider 
        value={{
            feedback,
            handleDel,
            addFeed,
            editFeed,
            upDatefeed,
            isLoading, 
            feedEdit,
        }}
        >
            {children}
        </FeedbackContext.Provider>
    )

}
export default FeedbackContext