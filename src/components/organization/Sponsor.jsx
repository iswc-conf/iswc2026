import React from 'react'
import AvatarSlider from './SliderSponsor'
import Header from '../general/Header'


function Sponsor({word, users, hideImage = false}) {
  return (
    <>
      <section className="lg:px-16 px-6 py-8">
       <Header>{word} </Header>
        
        <div className="lg:mx-24 mx-6 mt-2">
          <AvatarSlider users={users} hideImage={hideImage}/>
          {/* Add more AvatarSlider components as needed */}
        </div>
      </section>
    </>
  )
}

export default Sponsor;