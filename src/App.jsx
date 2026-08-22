import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="left">
        <div>
        <h1>A Journey in Tech</h1>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVyZHxlbnwwfHwwfHx8MA%3D%3D" className="Profile photo" alt="Profile photo" />
          <p>
            This is a short personal blog on a journey in tech.
            A narration by Victor Wasunna.
          </p>
        </div>



      </section>

      <div></div>

      <section id="next-steps">
        <div id="docs">
          
          <h2>Articles</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>             
            </li>

            <li>              
            </li>
          </ul>
        </div>
        <div id="social">

          <h2></h2>
          <p></p>
          <ul>
            <li>

            </li>

            <li>

            </li>
            <li>

            </li>
            <li>

            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
