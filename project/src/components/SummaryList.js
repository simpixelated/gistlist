import React, { Component } from 'react';
import _ from 'lodash';
import SummaryItem from './SummaryItem';
import GistDetail from './GistDetail';
import './SummaryList.css';

class SummaryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGist: '',
      favorites: [],
    };
  }

  onClickViewDetails = (activeGist) => this.setState({ activeGist });
  onClickBack = (event) => {
    event.preventDefault();
    this.setState({ activeGist: null });
  }
  onClickFavorite = (file) => {
    let { favorites } = this.state;
    if (_.find(favorites, file)) {
      favorites = _.reject(favorites, file);
    } else {
      favorites = [...favorites, file];
    }
    this.setState({ favorites });
  }

  render () {
    const { activeGist, favorites } = this.state;
    const { gists } = this.props;
    if (activeGist) {
      const found = _.find(gists, { id: activeGist });
      return (
        <GistDetail
          {...found}
          handleClickBack={this.onClickBack}
          handleClickFavorite={this.onClickFavorite}
          favorites={favorites}
        />
      );
    }
    return (
      <SummaryList gists={gists} onClickViewDetails={this.onClickViewDetails} />
    );
  }
}

const SummaryList = ({ gists, onClickViewDetails }) => (
  <div>
    <p>Found {gists.length} gists:</p>
    <ul className="summary-list">
      {_.map(gists, ({ created_at, description, id }) => (
        <SummaryItem
          date={created_at}
          description={description}
          handleClick={onClickViewDetails}
          id={id}
          key={id}
        />
      ))}
    </ul>
  </div>
)

export default SummaryListContainer;
