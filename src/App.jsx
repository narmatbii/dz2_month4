import './App.css'
import './components/Search/Search'
import './components/FruitList/FruitList'
import Search from './components/Search/Search'
import FruitList from './components/FruitList/FruitList'
function App() {
  const person = {name:'narmat', profession: 'teacher'}
  const fruits = ['Apple', 'Banana','Apricot','Grape', 'Cherry','Mango','Peach']
   return (
   
    <div>
       <Search/>
       <ul>
        { fruits.map( s =>
          <FruitList name ={s} />
        )}
       </ul>
    </div>
    
  )
}

export default App
