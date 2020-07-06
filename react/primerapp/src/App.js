import React from 'react';
import { render } from 'react-dom';
//import logo from './logo.svg';
import './App.css';

const slides = [
  {
    title: 'React',
    bullets: [
      'Allows us to write declarative views that "react" too changes in data',
      'Allows us to abstract complex problems into smaller components',
      'Allows us to write simple code that is still performant',
    ]
  },
  {
    title: 'React is Declarative',
    bullets: [
      'Imperative vs Declarative',
      "The browser APIs aren´t fun to work with",
      'React allows us to write what we want, and the library will take care of the DOM manipulation',
    ],
  },
  {
    title: 'React is Easily Componentized',
    bullets: [
      'Breaking a complex problem into discrete components',
      'Can reuse these components',
      "React´s declarative nature makes it easy to costumize components"
    ],
  },
];

const Slide = props => (
  <div>
      <h1>{props.slide.title}</h1>
      <ul>
        {props.slide.bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </div>
);

const slideShow = (
  <div>
    {slides.map(slide => <Slide slide={slide} />)}
  </div>
);

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0,
    }
  }
  increaseCount() {
    this.setState(prevState => ({count: prevState.count +1}))
    this.setState(prevState => ({count: prevState.count +1}))
  }
  render() {
    return (
      <div style={styles}>
        <button onClick={() => this.increaseCount()}>Incrementar</button>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

/*
function App() {
  return (
    countShow
  );
}
*/
 
export default App;
