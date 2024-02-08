import React from 'react'
import { useState, useEffect } from 'react';
import useFetch from '../customeHooks/useFetch';


export default function Word() {

const {data:word, isLoading} = useFetch("https://random-word-api.herokuapp.com/word")

  return (
    <div>{isLoading ? "Loading..." : word}</div>
  )
}
