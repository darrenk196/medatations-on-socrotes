import React from 'react'
import './Navagation.css'

const Navagation = () => {
  return (
    <div>
        <nav className="pa3 pa4-ns">
            <a className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Diologos With Socrotes & Plato</a>
            <div className="tc pb3">
                <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
                <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
                <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
                <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navagation