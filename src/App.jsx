import './App.css'
import './components/Search/Search'
import './components/FruitList/FruitList'
import Search from './components/Search/Search'
import FruitList from './components/FruitList/FruitList'
function App() {

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  
  const handleInput = (val) => {
    console.log(val);
  }


  const fruits = ['Apple', 'Banana','Apricot','Grape', 'Cherry','Mango','Peach']



   return (
   
    <div>
       <Search onSearch={handleSearch}  handleInput={handleInput} />
       <ul>
        { fruits.map( s =>
          <FruitList name ={s} />
        )}
       </ul>
    </div>
    
  )
}

export default App
