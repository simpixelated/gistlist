import React, { Component } from 'react';
import _ from 'lodash';
import gists from './library';
import Search from './components/Search';
import SummaryList from './components/SummaryList';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleSearch = _.debounce(this.handleSearch, 500);
    this.state = {
      username: '',
      gists: [],
    };
  }

  onChangeUsername = (event) => {
    const username = event.target.value;
    this.setState({ username });
    this.handleSearch(username);
  }

  handleSearch = (username) => {
    if (username) {
      gists.getPublicGistsByUsername(username)
        .then(data => {
          const gists = (data && data.length) ? data : [];
          this.setState({ gists });
        });
    } else {
      this.setState({ gists: [] })
    }
  }

  render() {
    const { username, gists } = this.state;
    return (
      <div>
        <Search handleChange={this.onChangeUsername} username={username} />
        <SummaryList gists={gists} />
      </div>
    );
  }
}

export default App;
