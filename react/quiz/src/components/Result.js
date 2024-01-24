import React from 'react'

const ANSWER_ENUM = {
    false : "Incorrect",
    true : "Correct"
}

export default function Result({answerStatus}) {
  return (
    <div>You answer is! {ANSWER_ENUM[answerStatus]}</div>
  )
}
