import React, { useState, useEffect } from "react"

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `you login ${count} times`
  }, [count])

  const handleClick = function () {
    alert("你点击了按钮")
  }
  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.addEventListener('click', handleClick);
    }
  })

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