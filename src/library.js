// GitHub's API is rate limited to 60 requests per hour for anonymous users. For that reason, you can use our proxy if needed.
const url = 'https://api.github.com';
const urlProxy = 'https://zapier-frontend-test.herokuapp.com/api/github';

const handleError = (err) => console.log(err);
const handleSuccess = (response) => response.json();

export default {
  // should provide a function that, given a username, retrieves the public gists for that particular user.
  getPublicGistsByUsername: (username) => {
    return fetch(`${urlProxy}/users/${username}/gists`)
      .then(handleSuccess)
      .catch(handleError);
  },
  // should provide a function that, given a gist ID, retrieves a specific gist.
  getGistById: (id) => {
    return fetch(`${urlProxy}/gists/${id}`)
      .then(handleSuccess)
      .catch(handleError);
  }
}
