import React from 'react'

const Headtitle = (props) => {
  return (
    <>
    <div className="bar">
        <div className="headline">
            <h2>{props.title}</h2>
        </div>
        <div className="all">
            <p className='showall'>Show All</p>
        </div>
    </div>
    </>
  )
}

export default Headtitle