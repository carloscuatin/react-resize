import React from 'react/addons';

export default class FullScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	width: window.innerWidth,
  		height: window.innerHeight
    }
  }

  handleResize() {
    this.setState({
    	width: window.innerWidth,
  		height: window.innerHeight
    });
  }

  componentWillMount() {
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