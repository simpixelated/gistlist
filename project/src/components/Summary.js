import React, { Component } from 'react';
import _ from 'lodash';

const GistDetail = ({ date, description }) => (
  <div>
    <p>Date: {date}</p>
    <p>Description: {description}</p>
    <p>Files:</p>
    <ul>
      <li>file</li>
    </ul>
  </div>
);

const onClick = (id, cb) => (event) => {
  event.preventDefault();
  cb(id);
};

const SummaryItem = ({ id, date, description, handleClick }) => (
  <div>
    <p>Date: {date}</p>
    <p>Description: {description}</p>
    <p><a href="#" onClick={onClick(id, handleClick)}>View Details</a></p>
  </div>
);

class SummaryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGist: ''
    };
  }

  onClickViewDetails = (activeGist) => this.setState({ activeGist });

  render () {
    const { activeGist } = this.state;
    const { gists } = this.props;
    console.log(activeGist, gists)
    if (activeGist) {
      return <GistDetail gist={{ date: 'test', description: '' }} />
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
