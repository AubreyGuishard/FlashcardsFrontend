
const Collection = ({ collection, fetchCards }) => {
    function handleClick(){
       fetchCards(collection.id)
    }
    
    return (
        <div onClick={handleClick}>
            {collection.title}
            
        
        </div>
    )
}

export default Collection;