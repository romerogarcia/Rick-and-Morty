import FilterName from './FilterName';
import FilterStatus from './FilterStatus';
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
        FilterWow={props.FilterStatus}
      />
      <ResetFilters handleReset={props.handleReset} />
    </div>
  );
}

export default Filter;
