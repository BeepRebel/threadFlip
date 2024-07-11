import React from 'react';

const FilterCard = () => {
  return (
    <div className="card mb-4">
      <h5 className="card-header">Filters</h5>
      <div className="card-body">
        {/* Add your filter options here */}
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkbox1" />
          <label className="form-check-label" htmlFor="checkbox1">
            Option 1
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkbox2" />
          <label className="form-check-label" htmlFor="checkbox2">
            Option 2
          </label>
        </div>
        {/* Add more filter options as needed */}
      </div>
    </div>
  );
};

export default FilterCard;
