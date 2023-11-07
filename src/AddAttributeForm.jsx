import { useState } from "react";

const INITIAL_TITLE_VALUE = "";

const AddAttributeForm = ({ onAddAttribute, labelText }) => {
  const [attributeTitle, setAttributeTitle] = useState(INITIAL_TITLE_VALUE);
  const attributeId = "attribute" + labelText;

  const handleTitleChange = (event) => {
    const newAttributeTitle = event.target.value;
    setAttributeTitle(newAttributeTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddAttribute({
      title: attributeTitle,
      id: Date.now(),
    });
    setAttributeTitle(INITIAL_TITLE_VALUE);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor={attributeId}>
        {labelText}:&nbsp;
        <input
          id={attributeId}
          name="title"
          value={attributeTitle}
          onChange={handleTitleChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddAttributeForm;
