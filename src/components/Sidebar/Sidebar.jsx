import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const SideBar = ({collections, activeCollectionId, setActiveCollectionId }) => {
     return ( <section>
        <CollectionContainer collections={collections} activeCollectionId={activeCollectionId} setActiveCollectionId={setActiveCollectionId}/>
     </section> );
}
 
export default SideBar;