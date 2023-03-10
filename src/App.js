import React from 'react'

function App() {
  return (
    <>
    <center>
    <div className='main-div'>
      <div className='child-div'>
        <figure>
          <figcaption><h1>Add Your List Here</h1></figcaption>
        </figure>

        <div className='addItems'>
          <input type='text' placeholder='✍ Add Your Item'></input>
          <i className='fa fa-plus add-btn'></i>
        </div>

      </div>
    </div>
    </center>
    </>
  )
}

export default App
