import React, { Component } from 'react';
import _ from 'lodash';
import gists from './library';
import Search from './components/Search';

/*
TODO:
- [x] A text box should be provided to enter a username.
- [ ] After entering the username, it should list the public gists for that user in summary form.The summary should contain at least the description and the date the gist was created. (Feel free to provide additional properties if you want.)
- [ ] Clicking on a gist should open up a detail page for that gist.
- [ ] The detail of the gist should list all the files for that gist.
- [ ] The contents of each file in the gist must be viewable somehow, but you can decide how best to do this.You can choose whether to show links to each file in the gist, a summary view of each file that expands, or the full content of each file on the detail page, etc.However, your app must render the file contents, so do not open external links to GitHub.Otherwise, there's no right or wrong choice here, just your personal preference.
- [ ] Using a button, link, icon, etc., you should be able to mark a particular file in a gist as a favorite.Once marked as a favorite, it should be clear(via text, icon, button state, etc.) that a particular file is a favorite.It should also be possible to unmark a particular file as a favorite.
- [ ] The list of favorites should be retained across different page views.So, for example, if a file "foo.txt" is marked as a favorite for username "foouser", and then a search is done for "baruser", "foo.txt" should still be marked as a favorite if we later search for "foouser" again and return to the "foo.txt" file.It is okay if favorites don't persist beyond a browser refresh.
- [ ] Some basic navigation / header should make it possible to return from a particular gist to the list of gists for a user and to perform a search for a different user, without having to refresh the browser or use the back button.It is okay if the browser’s URL doesn’t change while navigating.
*/

class App extends Component {
  constructor (props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.handleSearch = _.debounce(this.handleSearch, 500);
    this.state = {
      username: '',
    };
  }

  onChangeUsername = (event) => {
    const username = event.target.value;
    this.setState({ username });
    if (username) {
      this.handleSearch(username);
    }
  }

  handleSearch (username) {
    gists.getPublicGistsByUsername(username)
      .then(console.log);
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <Search handleChange={this.onChangeUsername} username={username} />

      </div>
    );
  }
}

export default App;
