import React from 'react'

const Cardart = (props) => {
    
  return (
    <>
        <div className="card-art drop-shadow-2xl place-items-start">
            <img className='rounded-lg card-img-art' src={props.src} />
            <h3>{props.title}</h3>
        </div>
    </>
  )
}

export default Cardart