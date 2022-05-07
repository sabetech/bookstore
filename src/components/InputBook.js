import React from "react"

const InputBook = () => {
    
  return (
    <form className="form-container">
      <input type="text" placeholder="Add Book" className="input-text" />
      <input type="text" placeholder="Add Author" className="input-text" />
      <button className="input-submit">Submit</button>
    </form>
  )
}
export default InputBook