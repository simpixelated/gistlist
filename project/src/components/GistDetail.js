import React, { Component } from 'react';
import _ from 'lodash';
import gists from '../library';

class GistDetailContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      files: props.files,
    };
  }
  componentDidMount () {
    gists.getGistById(this.props.id)
      .then(gist => this.setState({ files: gist.files }));
  }

  render () {
    return (<GistDetail {...this.props} files={this.state.files} />);
  }
}

const GistDetail = ({ created_at, description, files, handleClickBack }) => (
  <div>
    <p><a href="#" onClick={handleClickBack}>&laquo; go back</a></p>
    <p>Date: {created_at}</p>
    <p>Description: {description}</p>
    <p>Files:</p>
    <ul>
      {_.map(files, (file, filename) => (
        <li key={filename}>
          {filename}
          {file.content && <pre>{file.content}</pre>}
        </li>
      ))}
    </ul>
  </div>
);

export default GistDetailContainer;
