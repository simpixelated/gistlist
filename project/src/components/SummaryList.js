import React, { Component } from 'react';
import _ from 'lodash';
import SummaryItem from './SummaryItem';
import GistDetail from './GistDetail';

class SummaryList extends Component {
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
      <div>
        <p>Found {gists.length} gists:</p>
        {_.map(gists, ({ created_at, description, id }) => (
          <SummaryItem
            date={created_at}
            description={description}
            handleClick={this.onClickViewDetails}
            id={id}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default SummaryList;
