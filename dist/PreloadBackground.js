'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/*
  This component displays a placeholder image that is hosted locally
  while it waits for a remote image to load.

  Usage: <PreloadBackground img={source} placeholder={localImage} {...other attributes}>
        {...child components}
       </PreloadBackground>
*/

var imageBackgroundPreloader = (function (_React$Component) {
  _inherits(imageBackgroundPreloader, _React$Component);

  _createClass(imageBackgroundPreloader, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        src: _react.PropTypes.string.isRequired,
        placeholder: _react.PropTypes.string.isRequired,
        className: _react.PropTypes.string,
        style: _react.PropTypes.object,
        children: _react.PropTypes.object
      };
    }
  }]);

  function imageBackgroundPreloader(props) {
    _classCallCheck(this, imageBackgroundPreloader);

    _get(Object.getPrototypeOf(imageBackgroundPreloader.prototype), 'constructor', this).call(this, props);

    this.state = {
      loaded: false,
      error: false
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  _createClass(imageBackgroundPreloader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Making this a global so it can be later
      // nullified when the component unmounts
      this.image = new Image();

      this.image.src = this.props.src;
      this.image.onload = this.handleLoad;
      this.image.onerror = this.handleError;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextState, nextProps) {
      return !this.state.loaded;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.image = null;
    }
  }, {
    key: 'handleLoad',
    value: function handleLoad(e) {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(e) {
      console.error('Failed to load ', this.props.src);

      this.setState({
        error: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var src = _props.src;
      var placeholder = _props.placeholder;
      var _props$className = _props.className;
      var className = _props$className === undefined ? ' image' : _props$className;
      var _props$children = _props.children;
      var children = _props$children === undefined ? null : _props$children;

      var props = _objectWithoutProperties(_props, ['src', 'placeholder', 'className', 'children']);

      var loadedClass = !className.contains('image') ? className + ' image' : className;

      if (this.state.loaded && !loadedClass.contains('loaded')) {
        loadedClass += ' loaded';
      }

      var source = !this.state.loaded || this.state.error ? placeholder : src;
      return _react2['default'].createElement(
        'div',
        _extends({ style: { PreloadBackground: 'url(' + source + ')' } }, props, { className: loadedClass }),
        children
      );
    }
  }]);

  return imageBackgroundPreloader;
})(_react2['default'].Component);

exports['default'] = imageBackgroundPreloader;
module.exports = exports['default'];