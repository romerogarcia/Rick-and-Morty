import FilterName from './FilterName';
import FilterStatus from './FilterStatus';
import FilterGender from './FilterGender';
import ResetFilters from './ResetFilters';

function Filter(props) {
  return (
    <div className="container_filters">
      <h2 className="container_filters__title-container">
        Find the character:
      </h2>
      <FilterName handleInputName={props.handleInputName} />

      <FilterStatus
        dataFilter={props.dataFilter}
        handleInputStatus={props.handleInputStatus}
        FilterStatus={props.FilterStatus}
      />
      <FilterGender
        dataFilter={props.dataFilter}
        handleInputGender={props.handleInputGender}
        FilterGender={props.FilterGender}
      />
      <ResetFilters handleReset={props.handleReset} />
    </div>
  );
}

export default Filter;
