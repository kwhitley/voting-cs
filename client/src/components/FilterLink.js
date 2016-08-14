import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import filters from '../reducers/filters';

const FilterLink = ({ filter, active, children, setFilter }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         setFilter(filter)
       }}
    >
      {children}
    </a>
  )
}

export default FilterLink;

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
};


export const FilterLinkContainer = connect(
  mapStateToProps,
  filters.creators
)(FilterLink);
