import React from 'react'
import {SortLinkContainer} from './SortLink'

const SortOptions = () => (
  <p className="sortOptions">sort by:&nbsp;
    <SortLinkContainer sortby="id">
      date
    </SortLinkContainer>
    ,&nbsp;
    <SortLinkContainer sortby="text">
      a-z
    </SortLinkContainer>
  </p>
)

export default SortOptions;
