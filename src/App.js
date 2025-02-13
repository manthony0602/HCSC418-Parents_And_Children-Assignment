import React from 'react';
import './App.css';

// "App" is the Parent Component
class App extends React.Component {
  state = {
    child1Image: '/images/MorehouseLogo.png',
    child2Image: '/images/EaglesLogo.jpg',
    child3Image: '/images/SteelersLogo2.webp',
  };

  // Define arrays of images for each child component
  aucSchools = [
    '/images/MorehouseLogo.png',
    '/images/SpelmanLogo.svg',
    '/images/CauLogo.svg',
  ];

  nflTeams = ['/images/EaglesLogo.jpg', '/images/ChiefsLogo.png'];

  bestNflTeam = [
    '/images/SteelersLogo.jpg',
    '/images/SteelersLogo2.webp',
    '/images/SteelersLogo3.jpg',
  ];

  // Function to handle the button click for Child 1
  handleChild1Click = () => {
    const currentIndex = this.aucSchools.indexOf(this.state.child1Image);
    const nextIndex = (currentIndex + 1) % this.aucSchools.length; // Cycle through the images
    this.setState({ child1Image: this.aucSchools[nextIndex] });
  };

  // Function to handle the button click for Child 2
  handleChild2Click = () => {
    const currentIndex = this.nflTeams.indexOf(this.state.child2Image);
    const nextIndex = (currentIndex + 1) % this.nflTeams.length; // Cycle through the images
    this.setState({ child2Image: this.nflTeams[nextIndex] });
  };

  // Function to handle the button click for Child 2
  handleChild3Click = () => {
    const currentIndex = this.bestNflTeam.indexOf(this.state.child3Image);
    const nextIndex = (currentIndex + 1) % this.bestNflTeam.length; // Cycle through the images
    this.setState({ child3Image: this.bestNflTeam[nextIndex] });
  };

  render() {
    return (
      <div className="App">
        {/* Child Component 1 */}
        <ChildComponent
          header="Best AUC School"
          image={this.state.child1Image}
          onChangeContent={this.handleChild1Click}
        />

        {/* Child Component 2 */}
        <ChildComponent
          header="Superbowl Winner"
          image={this.state.child2Image}
          onChangeContent={this.handleChild2Click}
        />

        {/* Child Component 3 */}
        <ChildComponent
          header="Best NFL Team Ever"
          image={this.state.child3Image}
          onChangeContent={this.handleChild3Click}
        />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    const { header, image, onChangeContent } = this.props;
    return (
      <div className="child-component">
        <h2>{header}</h2>
        <img src={image} alt={`${header} logo`} />
        <button onClick={onChangeContent}>Change Content</button>
      </div>
    );
  }
}

export default App;
