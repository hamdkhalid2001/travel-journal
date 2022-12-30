import React from 'react'

function TravelPlace(props) {
  return (
    <>
        <div className='travel-place'>
            <img src={require(`../assets/${props.location}.png`)} className='country-img' alt='Globe'></img>
            <section className='description'>
                <span>
                    <img src={require('../assets/marker.png')} alt="Marker" width={10} className="marker-img"></img>    
                    <span className='country'>{(props.location).toUpperCase()} <span>View on Google Maps</span></span>
                </span>
                <h2>{props.title}</h2>
                <p className='duration'>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </section>
        </div>
        <hr/>
    </>
  )
}

export default TravelPlace
