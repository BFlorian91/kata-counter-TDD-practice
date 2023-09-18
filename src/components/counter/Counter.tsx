import React, { useEffect } from 'react'

interface CounterProps {
  initialValue: number
}

export default function Counter({ initialValue = 0 }: CounterProps): JSX.Element {
  const [value, setValue] = React.useState(initialValue)

  const handleAdd = (): void => {
    setValue((prevValue) => prevValue + 1)
  }

  const handleSubtract = (): void => {
    if (value === 0) return
    setValue((prevValue) => prevValue - 1)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <section className="w-full bg-red-400">
      <h1>Counter</h1>
      <p data-testid="value">{value}</p>
      <div className="flex justify-center ">
        <button data-testid="subtract-button" onClick={handleSubtract}>
          -
        </button>
        <button data-testid="add-button" onClick={handleAdd}>
          +
        </button>
      </div>
    </section>
  )
}
