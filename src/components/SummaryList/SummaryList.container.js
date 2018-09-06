import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SummaryList from './SummaryList.component';
import GistDetail from '../GistDetail';
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

  // toggle by removing from favorites if already present
  onClickFavorite = (file) => {
    let { favorites } = this.state;
    favorites = _.find(favorites, file) ? _.reject(favorites, file) : [...favorites, file];
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
      <SummaryList
        gists={gists}
        onClickViewDetails={this.onClickViewDetails}
        favorites={favorites}
      />
    );
  }
}

SummaryListContainer.propTypes = {
  gists: PropTypes.array,
};

export default SummaryListContainer;
