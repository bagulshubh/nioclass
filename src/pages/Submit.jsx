import React, { useContext } from 'react'
import DataContext from '../Context/DataContext'
import { useNavigate } from 'react-router-dom';

const Submit = () => {

    const context = useContext(DataContext);
    const username = context.Username;
    const minutes = context.minutes;
    const seconds = context.seconds;
    const totalTime = context.totalTime;
    const elapsedTimeM = totalTime - minutes - 1;
    const elapsedTimeS = 60 - seconds;
    const timeperq = context.timeperq;
    const QuestionArr = context.QuestionArr;
    const navigate = useNavigate();

    const restartHandler = ()=>{
      context.setUsername("");
      context.setQuestionArr([]);
      context.setQuestions([]);
      context.setTotalTime(0);
      context.setTimeperq([]);
      navigate('/');
    }

  return (
    <div className='submit-wrapper'>
      <h2>Submission Details</h2>
      <div className='submit-username'>Username:- {username}</div>
      <div className='submit-time'>
        Time Taken {elapsedTimeM}:{elapsedTimeS} Minutes
      </div>
      <div className='submit-table'>{
        
        QuestionArr.map((q,index)=>{
            return (
                <div>
                {
                  timeperq[index] ? (
                    <div>{q} = {timeperq[index][0]}:{timeperq[index][1]}</div>
                  ):(
                    <div>{q} = 0:0</div>
                  )
                  
                }
                </div>
                
            )
        })

      }</div>

      <div className='btn' onClick={restartHandler}>Restart</div>
      
    </div>
  )
}

export default Submit
