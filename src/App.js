import React from 'react';
import Homecards from './homecards';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homecards: [],
      loading: false,
      error: null
    };
  }

  fetchHomecards() {
    this.setState({ loading: true });

    fetch('/api/homecards')
    .then(res => res.json())
    .then(data => this.setState({ homecards: data.homecards, loading: false }))
    .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetchHomecards();
  }

  render() {
    const { homecards, loading, error } = this.state;

    return (
      <div className="app">
        <header className="app-header">
          <div className="header-brand">spotaroom</div>
          <div className="header-menu">
            <ul>
              <li><a href="/">The company</a></li>
              <li><a href="/">How we work</a></li>
              <li><a href="/">Contact us</a></li>
            </ul>
          </div>
        </header>
        { 
          loading ?
            <div className="loading">Loading...</div>
            :
            !error ?
              <Homecards items={homecards} />
              :
              <div className="error">{error.message}</div>
        }
      </div>
    );
  }
}

export default App;
