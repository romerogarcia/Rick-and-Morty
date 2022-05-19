function FilterGender(props) {
  const handleSelect = (ev) => {
    props.handleInputGender(ev.target.value);
  };
  return (
    <>
      <label className="filter__label" htmlFor="Status">
        Gender
        <select
          className="filter__label__select"
          onChange={handleSelect}
          value={props.FilterGender}
        >
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
    </>
  );
}

export default FilterGender;
