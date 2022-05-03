import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilters } from '../../redux/filters-selectors';
import { changeFilter } from '../../redux/filters-reducer';
import './Filter.scss';

const Filter = () => {
  const value = useSelector(getFilters);
  const dispatch = useDispatch();

  return (
    <label className="Filter">
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default Filter;
