import ListItem from "./ListItem";

const AttributeList = ({ attributeList }) => (
  <ul>
    {attributeList.map((listItem) => (
      <ListItem key={listItem.id} item={listItem} />
    ))}
  </ul>
);

export default AttributeList;
