const displayArrShort = (renderThisArray = []) => {
    return (
      renderThisArray.map((num, i) => {
          return (
            <div className="arrayShort" key={i}>
              <p className="arrShort">{num}</p>
            </div>
          )
        })
    )
  }
  
  
  export default displayArrShort;