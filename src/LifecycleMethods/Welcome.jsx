const Welcome = ({ name }) => {
  if (name === "Monty") {
    throw Error("Something went wrong")
  }
  return (
    <div>
      <h1>Welcome - {name}</h1>
    </div>
  )
}

export default Welcome