import React, { Component } from 'react';
import _ from 'lodash';
import SummaryItem from './SummaryItem';
import GistDetail from './GistDetail';

class SummaryListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGist: ''
    };
  }

  onClickViewDetails = (activeGist) => this.setState({ activeGist });
  onClickBack = (event) => {
    event.preventDefault();
    this.setState({ activeGist: null });
  }

  render () {
    const { activeGist } = this.state;
    const { gists } = this.props;
    if (activeGist) {
      const found = _.find(gists, { id: activeGist });
      return <GistDetail {...found} handleClickBack={this.onClickBack} />
    }
    return (
      <SummaryList gists={gists} onClickViewDetails={this.onClickViewDetails} />
    );
  }
}

const SummaryList = ({ gists, onClickViewDetails }) => (
  <div>
    <p>Found {gists.length} gists:</p>
    <ul>
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
