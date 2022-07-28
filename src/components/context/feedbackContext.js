import React, {createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
 export const feedbackContext = createContext({children:()=>{}});

export const feedbackprovider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setfeedback] = useState({
        item: {},
        edit: false,
      })

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
        setIsLoading(false)
    
    
      } 
     const  upDatefeed = (id, upditem) =>{
         setfeedback(
             feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
         )
          
      }


      const value = {
            feedback,
            handleDel,
            addFeed,
            editFeed,
            upDatefeed,
            isLoading, 
            feedEdit
      };

    return(
        <feedbackContext.Provider value={value}>{children}</feedbackContext.Provider>
    );

}
export default feedbackContext