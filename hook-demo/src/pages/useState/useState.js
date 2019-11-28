import React, { useState } from "react"

function Example() {
  const [count, setCount] = useState(1)
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  )
}
export default Example