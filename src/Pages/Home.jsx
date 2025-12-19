import React, { useState, useEffect } from "react";
import Counter from "../components/Counter"; 
import { IoPersonAddSharp } from "react-icons/io5";
import { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const year = new Date().getFullYear();
  const[counter, setCounter] = useState (0)

  const navigate = useNavigate()

  useEffect(() => {
    //code goes here
    console.log("rendered")
  }, [])

  const handleMinus = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  const programmaticNavigation = () => {
    navigate('/about')
    console.log("Gott navigated programmatically!")
  }
    return (
      
     
    <main >
      <h1 className="text-red-600 text-4xl font-bold">
        Hello React
      </h1>

      <h3>
        The year is {year}
      </h3>

      <Counter
      name='Component'
      />

      <div>
        <h1>
          {counter}
        </h1>


        <div
        className="flex gap-[10px]"
        >
          <button
          onClick={ () => setCounter(counter + 1)}
          >
            Add
          </button>


          <button
           onClick={handleMinus}
          >
            Minus
           
          </button>
          <IoPersonAddSharp />
         

          
        </div>
        <Link to={'/about'}>
        Go to about page
        </Link>

        <button
        onClick={programmaticNavigation}
        >
            programmaticNavigation
        </button>
      </div>
    </main>
  )
}
