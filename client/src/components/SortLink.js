import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import sort from '../reducers/sort';

const SortLink = ({ sortby, active, children, setSortBy, reverseSortDirection, ascending }) => {
  if (active) {
    return (
      <a className={'active ' + (ascending ? 'ascending' : 'descending')} href="#"
         onClick={e => {
           e.preventDefault()
           reverseSortDirection()
         }}
      >
        {children}
      </a>
    )
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         setSortBy(sortby)
       }}
    >
      {children}
    </a>
  )
}

export default SortLink;

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.sortby === state.sort.by,
    ascending: state.sort.ascending,
  }
};


export const SortLinkContainer = connect(
  mapStateToProps,
  sort.creators
)(SortLink);
