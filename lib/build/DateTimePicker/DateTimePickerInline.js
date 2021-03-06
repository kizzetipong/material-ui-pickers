"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateTimePickerInline = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("../constants/prop-types"));

var _InlineWrapper = _interopRequireDefault(require("../wrappers/InlineWrapper"));

var _DateTimePicker = _interopRequireDefault(require("./DateTimePicker"));

var _BasePicker = _interopRequireDefault(require("../_shared/BasePicker"));

var DateTimePickerInline = function DateTimePickerInline(props) {
  var value = props.value,
      format = props.format,
      autoOk = props.autoOk,
      openTo = props.openTo,
      minDate = props.minDate,
      maxDate = props.maxDate,
      initialFocusedDate = props.initialFocusedDate,
      showTabs = props.showTabs,
      autoSubmit = props.autoSubmit,
      disablePast = props.disablePast,
      disableFuture = props.disableFuture,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon,
      renderDay = props.renderDay,
      ampm = props.ampm,
      shouldDisableDate = props.shouldDisableDate,
      animateYearScrolling = props.animateYearScrolling,
      forwardedRef = props.forwardedRef,
      allowKeyboardControl = props.allowKeyboardControl,
      yearOffset = props.yearOffset,
      pickerHeaderFormat = props.pickerHeaderFormat,
      other = (0, _objectWithoutPropertiesLoose2.default)(props, ["value", "format", "autoOk", "openTo", "minDate", "maxDate", "initialFocusedDate", "showTabs", "autoSubmit", "disablePast", "disableFuture", "leftArrowIcon", "rightArrowIcon", "dateRangeIcon", "timeIcon", "renderDay", "ampm", "shouldDisableDate", "animateYearScrolling", "forwardedRef", "allowKeyboardControl"]);
  return _react.default.createElement(_BasePicker.default, (0, _extends2.default)({}, props, {
    autoOk: true
  }), function (_ref) {
    var date = _ref.date,
        utils = _ref.utils,
        handleChange = _ref.handleChange,
        handleTextFieldChange = _ref.handleTextFieldChange,
        isAccepted = _ref.isAccepted,
        pick12hOr24hFormat = _ref.pick12hOr24hFormat;
    return _react.default.createElement(_InlineWrapper.default, (0, _extends2.default)({
      ref: forwardedRef,
      disableFuture: disableFuture,
      disablePast: disablePast,
      maxDate: maxDate,
      minDate: minDate,
      onChange: handleTextFieldChange,
      value: value,
      isAccepted: isAccepted,
      format: pick12hOr24hFormat(utils.dateTime12hFormat, utils.dateTime24hFormat),
      yearOffset: yearOffset
    }, other), _react.default.createElement(_DateTimePicker.default, {
      allowKeyboardControl: allowKeyboardControl,
      ampm: ampm,
      animateYearScrolling: animateYearScrolling,
      autoSubmit: autoSubmit,
      date: date,
      dateRangeIcon: dateRangeIcon,
      disableFuture: disableFuture,
      disablePast: disablePast,
      leftArrowIcon: leftArrowIcon,
      maxDate: maxDate,
      minDate: minDate,
      onChange: handleChange,
      openTo: openTo,
      renderDay: renderDay,
      rightArrowIcon: rightArrowIcon,
      shouldDisableDate: shouldDisableDate,
      showTabs: showTabs,
      timeIcon: timeIcon,
      pickerHeaderFormat: pickerHeaderFormat,
      yearOffset: yearOffset
    }));
  });
};

exports.DateTimePickerInline = DateTimePickerInline;
DateTimePickerInline.propTypes = {
  value: _propTypes2.default.date,
  format: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  autoOk: _propTypes.default.bool,
  autoSubmit: _propTypes.default.bool,
  disableFuture: _propTypes.default.bool,
  disablePast: _propTypes.default.bool,
  minDate: _propTypes2.default.date,
  maxDate: _propTypes2.default.date,
  initialFocusedDate: _propTypes2.default.date,
  showTabs: _propTypes.default.bool,
  leftArrowIcon: _propTypes.default.node,
  rightArrowIcon: _propTypes.default.node,
  dateRangeIcon: _propTypes.default.node,
  timeIcon: _propTypes.default.node,
  renderDay: _propTypes.default.func,
  ampm: _propTypes.default.bool,
  shouldDisableDate: _propTypes.default.func,
  animateYearScrolling: _propTypes.default.bool,
  openTo: _propTypes.default.oneOf(['year', 'date', 'hour', 'minutes']),
  allowKeyboardControl: _propTypes.default.bool,
  forwardedRef: _propTypes.default.func,
  yearOffset: _propTypes.default.number,
  pickerHeaderFormat: _propTypes.default.string
};
DateTimePickerInline.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  autoSubmit: true,
  openTo: 'date',
  disableFuture: false,
  disablePast: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  initialFocusedDate: undefined,
  showTabs: true,
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  dateRangeIcon: 'date_range',
  timeIcon: 'access_time',
  renderDay: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false,
  forwardedRef: undefined,
  allowKeyboardControl: true,
  yearOffset: 0,
  pickerHeaderFormat: undefined
};

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(DateTimePickerInline, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});

exports.default = _default;