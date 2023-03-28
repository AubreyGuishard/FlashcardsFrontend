
const Collection = ({ collection, activeCollectionId, setActiveCollectionId }) => {
    function handleClick(){
       setActiveCollectionId(collection.id)
    }
    
    return (
        <div onClick={handleClick}>
            {collection.title}
            
        
        </div>
    )
}

export default Collection;