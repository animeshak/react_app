import React, { useState } from 'react'

function Usersum() {

    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ result, setResult ] = useState(0);
    function addfun(){
      setResult(num1 + num2)
    }
  return (
    <>
    <h1>Addition of two numbers</h1>
    <input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>
    <input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
    <button onClick={addfun}>Get Addtion</button>
    <div>{result}</div>
    </>
  )
}

export default Usersum
