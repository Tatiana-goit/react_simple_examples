import React from 'react'
import { useState } from 'react'
import s from './Modal.module.css'

export default function Modal({ children }) {
  const [active, setActive] = useState(false)

  const rootClasses = [s.modal]
  if (active) {
    rootClasses.push(s.vissible)
  }

  const openWindow = () => {
    setActive(true)
  }
  const closeWindow = () => {
    setActive(false)
  }


  return (
    <>
      <h2>{children}</h2>
      <button className={s.button__open} onClick={openWindow} type="button">
        OPEN MODAL
      </button>

      <div className={rootClasses.join(' ')} onClick={closeWindow}>
        <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
          <span className={s.close} onClick={closeWindow}>
            &times;
          </span>
          <h2 className={s.title}>Hello from Modal Window</h2>
          <button
            className={s.button__close}
            onClick={closeWindow}
            type="button"
          >
            CLOSE
          </button>
        </div>
      </div>
    </>
  )
}
