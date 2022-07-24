import { createContext, useState } from "react";
import React from "react";
import { v4 as uuidv4 } from 'uuid'
const feedbackContext = createContext()

export const feedbackprovider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setfeedback] = useState([{
        id: 1,
        text: 'this is the context data',
        rating: 9,
    }])

    const handleDel = (id) => {

        if (window.confirm('Do yo want to delete this feedback?')){
           setfeedback(feedback.filter((item) => item.id !== id))
        }
       
      }

      const [feedEdit, setfeedEdit] = useState({
          item: {},
          edit:false

      })

      const editFeed =(item) =>{
          setfeedEdit({
              item,
              edit:true
          })

      }

      const addFeed = (newFeedback) => {
        newFeedback.id = uuidv4()
        setfeedback([newFeedback, ...feedback])
    
    
      } 
     const  upDatefeed = (id, upditem) =>{
         setfeedback(
             feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
         )
          
      }


    return(

        <feedbackContext.Provider value={{
            feedback,
            handleDel,
            addFeed,
            editFeed,
            upDatefeed,
            isLoading, 
            feedEdit
        }}>
        {children}



        </feedbackContext.Provider>
    )

}
export default feedbackContext