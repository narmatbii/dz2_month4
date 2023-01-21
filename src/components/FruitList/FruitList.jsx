import styles from './FruitList.css'

function FruitList (props) {
    return(
        <span>
          <li>
            {props.name}
          </li>  
        </span>
        
    )
}

export default FruitList