'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('../hoc');

var _styledComponents = require('../../styledComponents');

var _config = require('../../config');

var _helper = require('../../services/helper.service');

var _dist = require('scaleflex-react-ui-kit/dist');

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconMonoColorSettings = function (_Component) {
  _inherits(IconMonoColorSettings, _Component);

  function IconMonoColorSettings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconMonoColorSettings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconMonoColorSettings.__proto__ || Object.getPrototypeOf(IconMonoColorSettings)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeColor: '#000000',
      isLoading: true,
      displayColorPicker: false
    }, _this.setColor = function (color) {
      _this.setState({ activeColor: color, isLoading: true });
    }, _this.onApply = function () {
      var upload = _this.props.upload;

      var width = 300;

      upload({ src: _this.getIconUrl(width) });
    }, _this.getIconUrl = function (width) {
      var activeColor = _this.state.activeColor;
      var activeIconSrc = _this.props.activeIconSrc;

      var colorQuery = 'tpng.transparentwhite.level' + activeColor.replace('#', '');

      return 'https://scaleflex.cloudimg.io/width/' + width + '/' + colorQuery + '/' + activeIconSrc + '&v=' + (0, _helper.guid)();
    }, _this.onLoad = function () {
      _this.setState({ isLoading: false });
    }, _this.handleClick = function () {
      _this.setState({ displayColorPicker: !_this.state.displayColorPicker });
    }, _this.handleChange = function (color) {
      _this.setState({ activeColor: color.hex, isLoading: true });
    }, _this.onOutsideClick = function () {
      _this.setState({ displayColorPicker: false });
      _this.props.onClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconMonoColorSettings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        if (_this2._buttonSearch && _this2._buttonSearch.focus) _this2._buttonSearch.focus();
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.activeColor !== this.state.activeColor || nextState.isLoading !== this.state.isLoading || nextState.displayColorPicker !== this.state.displayColorPicker;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var themeColors = this.props.themeColors;
      var _state = this.state,
          isLoading = _state.isLoading,
          displayColorPicker = _state.displayColorPicker,
          activeColor = _state.activeColor;

      var popover = {
        position: 'absolute',
        zIndex: '4',
        top: 0,
        right: -230
      };

      return _react2.default.createElement(
        _hoc.Aux,
        null,
        _react2.default.createElement(_styledComponents.Opacity, { isShow: true, onClick: function onClick() {
            _this3.onOutsideClick();
          } }),
        _react2.default.createElement(
          _styledComponents.MonoIconSettings,
          { isShow: true, displayColorPicker: displayColorPicker },
          _react2.default.createElement(
            _styledComponents.SettingsIconWrapper,
            null,
            _react2.default.createElement(_styledComponents.SettingsIcon, { src: this.getIconUrl(140), onLoad: this.onLoad }),
            _react2.default.createElement(_dist.Spinner, { overlay: true, show: isLoading, style: { fontSize: 10 } })
          ),
          _react2.default.createElement(
            _styledComponents.MonoActionBlock,
            null,
            _react2.default.createElement(
              _styledComponents.Label,
              { color: 'black' },
              'Customize your icon'
            ),
            _react2.default.createElement(
              _styledComponents.ColorsWrapper,
              null,
              _config.COLORS.map(function (color, index) {
                return _react2.default.createElement(_styledComponents.ColorIcon, {
                  onClick: function onClick() {
                    _this3.setColor(color);
                  },
                  onKeyDown: function onKeyDown(event) {
                    event.keyCode === 13 && _this3.setColor(color);
                  },
                  bgColor: color,
                  key: 'color-' + index,
                  tabIndex: 10000,
                  role: 'button'
                });
              }),
              _react2.default.createElement(_styledComponents.ColorIcon, {
                onClick: this.handleClick,
                onKeyDown: function onKeyDown(event) {
                  event.keyCode === 13 && _this3.handleClick();
                },
                bgColor: 'transparent',
                bgImage: '//example.api.airstore.io/v1/get/a842b7b1-ae10-5e27-8838-fbc7796305fb',
                tabIndex: 10000,
                role: 'button'
              })
            ),
            themeColors && _react2.default.createElement(
              _styledComponents.ThemeColors,
              null,
              _react2.default.createElement(
                _styledComponents.Label,
                { color: 'black', mr: '5px', p: '0px' },
                'Theme colors:'
              ),
              _react2.default.createElement(_styledComponents.ColorIcon, { onClick: function onClick() {
                  _this3.setColor(themeColors.primary);
                }, bgColor: themeColors.primary }),
              _react2.default.createElement(_styledComponents.ColorIcon, { onClick: function onClick() {
                  _this3.setColor(themeColors.secondary);
                }, bgColor: themeColors.secondary })
            ),
            _react2.default.createElement(
              _styledComponents.ButtonSearch,
              {
                innerRef: function innerRef(node) {
                  return _this3._buttonSearch = node;
                },
                fullBr: '4px',
                onClick: this.onApply,
                tabIndex: 10001
              },
              'Apply'
            )
          ),
          displayColorPicker ? _react2.default.createElement(
            'div',
            { style: popover },
            _react2.default.createElement(_reactColor.SketchPicker, { color: activeColor, onChange: this.handleChange })
          ) : null
        )
      );
    }
  }]);

  return IconMonoColorSettings;
}(_react.Component);

exports.default = IconMonoColorSettings;