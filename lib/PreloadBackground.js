import React, {PropTypes} from 'react';
/*
  This component displays a placeholder image that is hosted locally
  while it waits for a remote image to load.

  Usage: <PreloadBackground img={source} placeholder={localImage} {...other attributes}>
        {...child components}
       </PreloadBackground>
*/
export default class imageBackgroundPreloader extends React.Component {
  static get propTypes () {
    return {
      src: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
      children: PropTypes.object,
    };
  }

  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
      error: false,
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    // Making this a global so it can be later
    // nullified when the component unmounts
    this.image = new Image();
    
    this.image.src = this.props.src;
    this.image.onload = this.handleLoad;
    this.image.onerror = this.handleError;
  }

  shouldComponentUpdate(nextState, nextProps) {
    return !this.state.loaded;
  }

  componentWillUnmount() {
    this.image = null;
  }

  handleLoad(e) {
    this.setState({
      loaded: true
    });
  }

  handleError(e) {
    console.error('Failed to load ', this.props.src);

    this.setState({
      error: true
    });
  }

  render() {
    const {src, placeholder, className = ' image', children = null, ...props} = this.props;
    let loadedClass = !className.contains('image') ? className + ' image' : className;

    if(this.state.loaded && !loadedClass.contains('loaded')){
      loadedClass += ' loaded';
    }

    const source = !this.state.loaded || this.state.error ? placeholder : src;
    return (
      <div style={{PreloadBackground: `url(${source})`}} {...props} className={loadedClass}>
        {children}
      </div>
    );
  }
}
