import './Collection.css'

const Collection = ({ collection, activeCollectionId, setActiveCollectionId }) => {
    function handleClick(){
       setActiveCollectionId(collection.id)
    }
    
    return (
        <section id='collection-section' className='move-left'>
             <button onClick={handleClick} className='collection-buttons'>
             {collection.title}
             </button>
         </section> 
            
                       
                   
    )
}

export default Collection;