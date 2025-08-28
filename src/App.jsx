import { useState } from 'react'
import './index.css'
import Info from './components/info'
import Bio from './components/bio'
import Social from './components/social'
import Image from './components/image'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
          <div className="card">
          <Image/>

<Info/>
<Bio/>
<Social/>
          </div>
    </>
  )
}

export default App
