import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SummaryItem from '../SummaryItem';

const SummaryList = ({ gists, onClickViewDetails, favorites }) => (
  <div>
    <p>Found {gists.length} gists:</p>
    <ul className="summary-list">
      {_.map(gists, ({ created_at, description, id, files }) => (
        <SummaryItem
          date={created_at}
          description={description}
          handleClick={onClickViewDetails}
          faveCount={_.filter(files, ({ filename }) => _.find(favorites, { filename })).length}
          id={id}
          key={id}
        />
      ))}
    </ul>
  </div>
);

SummaryList.propTypes = {
  gists: PropTypes.array,
  onClickViewDetails: PropTypes.func,
  favorites: PropTypes.array,
};

export default SummaryList;
