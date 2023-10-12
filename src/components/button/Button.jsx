import React from 'react'
import './button.css'

export default function Button({text}) {
  return (
    <div className="btn">
            <button type="button" className="subBtn">
              {text}
            </button>
          </div>
  )
}
