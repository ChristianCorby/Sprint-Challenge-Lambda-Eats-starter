import React from "react";
class Special extends React.Component{
render(){
    return <form>
     <label>
    Special Instructions:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
    </form>
}
}
export default Special;