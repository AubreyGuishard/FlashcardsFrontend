import React from "react";
import Collection from "../Collection/Collection";
const CollectionContainer = ({ collections, fetchCards }) => {
  const collectionList = collections.map((collection) => (
    <Collection collection={collection} fetchCards={fetchCards}/>
  ));
  return <div>{collectionList}</div>;
};

export default CollectionContainer;
