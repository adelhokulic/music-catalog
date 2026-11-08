
const Search = ({onSearch}) => {
    return (
        <>
        <input type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Type album to search"/>
        </>
    )
}

export default Search;