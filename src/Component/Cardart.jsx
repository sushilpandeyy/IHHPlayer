import React from 'react'

const Cardart = (props) => {
    console.log(props)
  return (
    <>
        <div className="card-outer m-2 drop-shadow-2xl place-items-start overflow-hidden h-200 w-240">
            <img className='art-img rounded-lg ' src={props.src} />
            <h3>{props.title}</h3>
        </div>
    </>
  )
}

export default Cardart