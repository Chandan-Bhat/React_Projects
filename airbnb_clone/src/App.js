import Nav from "./Nav"
import Card from "./Card";
import data from "./data";

//Creating multiple custom Card elements using data from array 
const cards = data.map((item) => {
  return (<Card deal = {item} />)
})

function App() {
  return(
      <div>
          <Nav />
          <div className = "container">
            {cards}
          </div>
      </div>
  )
}

export default App;