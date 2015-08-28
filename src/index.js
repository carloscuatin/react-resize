import React from 'react';

export default class Resize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	width: window.innerWidth,
  		height: window.innerHeight
    }

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
    	width: window.innerWidth,
  		height: window.innerHeight
    });
  }

  componentDidMount() {
  	window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
  	var children = React.Children.map(
      this.props.children,
      function(child) {
        return {child};
      }
    );
    return <div style={{width: this.state.width, height: this.state.height}}>{children}</div>;
  }

}