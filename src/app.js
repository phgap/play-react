import ReactDOM from "react-dom";
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./sass/main.scss";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({match}) => (
  <div>
    <h2>{match.params.matchId}</h2>
  </div>
)


const Topics = ({match}) => {
  console.log(match);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.path}/components`}>
            components
          </Link>
        </li>
        <li>
          <Link to={`${match.path}/rendering`}>
            rendering
          </Link>
        </li>
        <li>
          <Link to={`${match.path}/props-v-state`}>
            props-v-state
          </Link>
        </li>
      </ul>
      <Route path={`${match.path}/:matchId`} component={Topic}/>
    </div>
  )

}

const Basic = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>

)

ReactDOM.render(
  <Basic/>,
  document.querySelector('#root')
)
