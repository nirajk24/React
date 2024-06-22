// import { useEffect } from "react"
// import { useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch("https://api.github.com/users/nirajk24")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data)
  //     })
  // }, [])

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <h1>Github Followers : {data && data.followers}</h1>
      <img src={data && data.avatar_url} alt='Git Picture' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/nirajk24")
  return response.json()
}