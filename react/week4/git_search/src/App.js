import React from 'react';
import ItemsList from './ItemsList';
import { ContextProvider } from './Context'

function App() {
  const [gitItems, setGitItems] = React.useState([]);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [textValue, changeTextValue] = React.useState("");
  const [searchType, setSearchType] = React.useState('users');

  React.useEffect(() => {
    if (textValue) {
      setLoading(true);
      fetchData(searchType, textValue, setGitItems, setError, setLoading);
    } else {
      setGitItems([]);
    }
  }, [textValue,searchType]);

  const contextContent = { loading, gitItems, error, textValue, changeTextValue, searchType }

  return (
    <ContextProvider value={contextContent}>
      <div className = "center">
        <h1>Github searcher</h1>
        <h4>
          <div onChange={(event) => setSearchType(event.target.value)}>
            <input type="radio" value="users" name="searchType" defaultChecked/> User Search
            <input type="radio" value="repositories" name="searchType"/> Repo Search
          </div>
        </h4>
          <ItemsList />
      </div>
    </ContextProvider>
  );
}

export default App;

function fetchData(searchType, textValue, setGitItems, setError, setLoading) {
   fetch(`https://api.github.com/search/${searchType}?q=${textValue}`)
    .then((response) => {
      if (response.ok) {
        setLoading(false);
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => setGitItems(data.items.slice(0, 50)))
    .catch((err) => setError(err));
}
