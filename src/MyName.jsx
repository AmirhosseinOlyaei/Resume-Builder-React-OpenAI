const NAME_ID = "name";

const MyName = ({ value, onValueChange }) => {
  return (
    <div>
      <label htmlFor={NAME_ID}>Name:&nbsp;</label>
      <input id={NAME_ID} value={value} onChange={onValueChange} />
    </div>
  );
};

export default MyName;
