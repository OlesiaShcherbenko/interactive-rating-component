import React from 'react'
import './App.scss'
import icon from '/img/icon-star-desktop.svg'
import illustration from '/img/illustration-thank-you.svg'

function ButtonsOfRaiting(props) {
  return (
    <button className='card__button'>{props.number}</button>
  )
}

export default function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <section className='card'>
        <img src={icon} alt="star" />
        <h3 className='card__heading'>How did we do?</h3>
        <p className='card__description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='card__btn-group'>
          <ButtonsOfRaiting number={1} />
          <ButtonsOfRaiting number={2} />
          <ButtonsOfRaiting number={3} />
          <ButtonsOfRaiting number={4} />
          <ButtonsOfRaiting number={5} />
        </div>
        <button onClick={() => setOpen(true)} className='card__btn-primary'>SUBMIT</button>
        {open && (
          <div className='thanks'>
            <img src={illustration} alt="thank you" />
            <div className='thanks__score'>
              <p>You selected {3} out of 5</p> 
              {/* Відобразити номер кнопки,яку натиснув користувач */}
            </div>
            <h3 className='thanks__heading'>Thank you!</h3>
            <p className='thanks__description'>We appreciate you taking the time to give a rating. If you ever need 
                more support, don’t hesitate to get in touch!
            </p> 
          </div>
      )}
      </section>
    </>
  )
}
