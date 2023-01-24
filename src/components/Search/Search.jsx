import styles from './Search.css'

function Search ({onSearch, handleInput}) {

    const handleName = (e) => {
        handleInput(e.target.value)
    }

    return(
        <form onSubmit={onSearch}>
            <input type="text" onChange={handleName} name="username" placeholder="Искать здесь..." />
            <button type="submit"></button>
        </form>
    )
}

export default Search