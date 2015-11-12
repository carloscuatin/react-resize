import React from 'react';

class Resize extends React.Component {
  constructor() {
    super();
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
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    let styles = {
      height: this.state.height,
      width: this.state.width,
    }

    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}

export default Resize
