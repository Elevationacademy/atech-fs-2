import React, { useState } from 'react'
import Options from './Options'
import "./Question.css"
import QuestionText from './QuestionText'
import Result from './Result'

export default function Question({question}) {
    const [isResultShown,setIsResultShown] = useState(false)

    const [choosenAnswer,setChoosenAnswer] = useState(false)


    const HandleAnswer = (optionIndex) => {
        console.log("picked the answer :"+optionIndex)
        if(optionIndex == question.correctAnswer){
            isResultShown = true
            choosenAnswer= true
            // setIsResultShown(true)
            // setChoosenAnswer(true)
        } else {
            // setIsResultShown(true)
            // setChoosenAnswer(false)
            isResultShown = true
            choosenAnswer= false

        }
    }


  return (
    <>
      <QuestionText text={question.text}/>
      <Options HandleAnswer={HandleAnswer} options={question.answers}/>
      {isResultShown ? <Result answerStatus={choosenAnswer}/> : null}
    </>
  )
}
