
const Search = ({onSearch}) => {
    return (
        <>
        <input className="album-controls__field album-controls__search" type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Type album to search"/>
        </>
    )
}

export default Search;