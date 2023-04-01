import './Collection.css'

const Collection = ({ collection, activeCollectionId, setActiveCollectionId }) => {
    function handleClick(){
       setActiveCollectionId(collection.id)
    }
    
    return (
        <section>
             <div onClick={handleClick}>
             {collection.title}
             </div>
         </section> 
            
                       
                   
    )
}

export default Collection;