import styles from './FruitList.css'

function FruitList (props) {

  const clickHandler = function(event) {
    event.preventDefault();
    console.log(event.target);
}
    return(
       
        <span>
          <li ><a href="#" onClick={clickHandler}>ссылка</a>
            {props.name}
          </li>  
        </span>
        
    )
}

export default FruitList