import React from 'react'
import './App.scss'
import icon from '/img/icon-star-desktop.svg'

function ButtonsOfRaiting(props) {
  return (
    <button className='card__button'>{props.number}</button>
  )
}

export default function App() {
  return (
    <>
      <section className='card'>
        <img src={icon} alt="icon star" />
        <h3 className='card__heading'>How did we do?</h3>
        <p className='card__description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='card__btn-group'>
          <ButtonsOfRaiting number={1} />
          <ButtonsOfRaiting number={2} />
          <ButtonsOfRaiting number={3} />
          <ButtonsOfRaiting number={4} />
          <ButtonsOfRaiting number={5} />
        </div>
        <button className='card__btn-primary'>SUBMIT</button>
      </section>
    </>
  )
}
