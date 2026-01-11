export default function Search({handleSearch}){
    return (
        <input type="text" onChange={(event) => handleSearch(event.target.value)}/>
    )
}