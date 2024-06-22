import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(null)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const [convertedAmount, setConvertedAmount] = useState(null)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-800'
        style={{
          backgroundImage:
            `url("https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg")`,
        }}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className='w-full mb-1'>
                <InputBox
                  label='from'
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div>
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  swap
                </button>
              </div>

              <div className='w-full mb-1'>
                <InputBox
                  label='to'
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  isAmountDisabled={true}
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
                onClick={convert}
              >
                Convert {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
