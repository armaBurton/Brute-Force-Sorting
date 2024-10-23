const displayArr = (renderThisArray) => {
  return (
    renderThisArray.map((num, i) => {
        return (
          <div className="array" key={i}>
            <p className="arr">{num}</p>
          </div>
        )
      })
  )
}


export default displayArr;