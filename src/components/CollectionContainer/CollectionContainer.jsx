import React from "react";
import Collection from "../Collection/Collection";

const CollectionContainer = ({
  collections,
  activeCollectionId,
  setActiveCollectionId,
}) => {
  const collectionList = collections.map((collection) => (
    <Collection
      collection={collection}
      activeCollectionId={activeCollectionId}
      setActiveCollectionId={setActiveCollectionId}
    />
  ));
  return (
    <section>
      <h2 className="align-center">Card Collections</h2>
      <ul id="collection-list">{collectionList}</ul>
    </section>
  );
};

export default CollectionContainer;
