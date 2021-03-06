"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DatePickerInline = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InlineWrapper = _interopRequireDefault(require("../wrappers/InlineWrapper"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _propTypes2 = _interopRequireDefault(require("../constants/prop-types"));

var _BasePicker = _interopRequireDefault(require("../_shared/BasePicker"));

var _Calendar = _interopRequireDefault(require("./components/Calendar"));

var DatePickerInline = function DatePickerInline(props) {
  var allowKeyboardControl = props.allowKeyboardControl,
      animateYearScrolling = props.animateYearScrolling,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      format = props.format,
      forwardedRef = props.forwardedRef,
      labelFunc = props.labelFunc,
      leftArrowIcon = props.leftArrowIcon,
      maxDate = props.maxDate,
      minDate = props.minDate,
      initialFocusedDate = props.initialFocusedDate,
      onChange = props.onChange,
      openToYearSelection = props.openToYearSelection,
      renderDay = props.renderDay,
      rightArrowIcon = props.rightArrowIcon,
      shouldDisableDate = props.shouldDisableDate,
      value = props.value,
      autoOk = props.autoOk,
      onlyCalendar = props.onlyCalendar,
      yearOffset = props.yearOffset,
      pickerHeaderFormat = props.pickerHeaderFormat,
      other = (0, _objectWithoutPropertiesLoose2.default)(props, ["allowKeyboardControl", "animateYearScrolling", "disableFuture", "disablePast", "format", "forwardedRef", "labelFunc", "leftArrowIcon", "maxDate", "minDate", "initialFocusedDate", "onChange", "openToYearSelection", "renderDay", "rightArrowIcon", "shouldDisableDate", "value", "autoOk", "onlyCalendar"]);
  var ComponentToShow = onlyCalendar ? _Calendar.default : _DatePicker.default;
  return _react.default.createElement(_BasePicker.default, (0, _extends2.default)({}, props, {
    autoOk: true
  }), function (_ref) {
    var date = _ref.date,
        utils = _ref.utils,
        isAccepted = _ref.isAccepted,
        handleChange = _ref.handleChange,
        handleTextFieldChange = _ref.handleTextFieldChange;
    return _react.default.createElement(_InlineWrapper.default, (0, _extends2.default)({
      disableFuture: disableFuture,
      disablePast: disablePast,
      format: format || utils.dateFormat,
      labelFunc: labelFunc,
      maxDate: maxDate,
      minDate: minDate,
      onChange: handleTextFieldChange,
      ref: forwardedRef,
      value: value,
      isAccepted: isAccepted,
      yearOffset: yearOffset
    }, other), _react.default.createElement(ComponentToShow, {
      date: date,
      allowKeyboardControl: allowKeyboardControl,
      animateYearScrolling: animateYearScrolling,
      disableFuture: disableFuture,
      disablePast: disablePast,
      leftArrowIcon: leftArrowIcon,
      maxDate: maxDate,
      minDate: minDate,
      onChange: handleChange,
      openToYearSelection: openToYearSelection,
      renderDay: renderDay,
      rightArrowIcon: rightArrowIcon,
      shouldDisableDate: shouldDisableDate,
      pickerHeaderFormat: pickerHeaderFormat,
      yearOffset: yearOffset
    }));
  });
};

exports.DatePickerInline = DatePickerInline;
DatePickerInline.propTypes = {
  onlyCalendar: _propTypes.default.bool,
  value: _propTypes2.default.date,
  minDate: _propTypes2.default.date,
  maxDate: _propTypes2.default.date,
  initialFocusedDate: _propTypes2.default.date,
  format: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  disablePast: _propTypes.default.bool,
  disableFuture: _propTypes.default.bool,
  animateYearScrolling: _propTypes.default.bool,
  openToYearSelection: _propTypes.default.bool,
  labelFunc: _propTypes.default.func,
  leftArrowIcon: _propTypes.default.node,
  rightArrowIcon: _propTypes.default.node,
  renderDay: _propTypes.default.func,
  shouldDisableDate: _propTypes.default.func,
  allowKeyboardControl: _propTypes.default.bool,
  forwardedRef: _propTypes.default.func,
  autoOk: _propTypes.default.bool,
  yearOffset: _propTypes.default.number,
  pickerHeaderFormat: _propTypes.default.string
};
DatePickerInline.defaultProps = {
  value: new Date(),
  format: undefined,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  initialFocusedDate: undefined,
  disableFuture: false,
  disablePast: false,
  animateYearScrolling: false,
  openToYearSelection: false,
  allowKeyboardControl: true,
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  renderDay: undefined,
  labelFunc: undefined,
  shouldDisableDate: undefined,
  forwardedRef: undefined,
  autoOk: undefined,
  onlyCalendar: false,
  yearOffset: 0,
  pickerHeaderFormat: undefined
};

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(DatePickerInline, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});

exports.default = _default;