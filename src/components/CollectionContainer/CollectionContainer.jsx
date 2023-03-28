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
  return <div>{collectionList}</div>;
};

export default CollectionContainer;
