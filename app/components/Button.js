"use client";

import React from 'react'

const Button = () => {
    function loadmore(){
        alert("load more called")
    }
  return (
    <>
        <button onClick={loadmore}>View Blog</button>
    </>
    
  )
}

export default Button