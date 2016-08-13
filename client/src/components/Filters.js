import React from 'react'
import {FilterLinkContainer} from './FilterLink'

const Filters = () => (
  <p>show:&nbsp;
    <FilterLinkContainer filter="SHOW_ALL">
      all
    </FilterLinkContainer>
    ,&nbsp;
    <FilterLinkContainer filter="SHOW_COMPLETED">
      completed
    </FilterLinkContainer>
    ,&nbsp;
    <FilterLinkContainer filter="SHOW_ACTIVE">
      active
    </FilterLinkContainer>
  </p>
)

export default Filters;
