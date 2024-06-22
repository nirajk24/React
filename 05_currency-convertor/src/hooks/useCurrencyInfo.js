import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) => {
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

  const [data, setData] = useState({})
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
  }, [currency])

  console.log()

  const some = "hello"

  return data
}

export default useCurrencyInfo
