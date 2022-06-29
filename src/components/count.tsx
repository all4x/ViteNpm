import { useState } from 'react'

export default function Main() {
  const [count, setCount] = useState<number | any>(0)

  function Plus() {
    setCount(count + 1)
  }

  function Sub() {
    setCount(count - 1)
  }

  return (
    <div className='space-x-5 flex justify-center font-normal text-gray-300'>
      <button onClick={Plus} className="bg-blue-900 px-2 rounded-md">Somar</button>
      <span>{count}</span>
      <button onClick={Sub} className="bg-blue-900 px-2 rounded-md">Menos</button>

    </div>
  )
}
