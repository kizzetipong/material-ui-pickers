"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CalendarHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _WithUtils = _interopRequireDefault(require("../../_shared/WithUtils"));

var _SlideTransition = _interopRequireDefault(require("./SlideTransition"));

var CalendarHeader = function CalendarHeader(_ref) {
  var classes = _ref.classes,
      theme = _ref.theme,
      currentMonth = _ref.currentMonth,
      onMonthChange = _ref.onMonthChange,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      disablePrevMonth = _ref.disablePrevMonth,
      disableNextMonth = _ref.disableNextMonth,
      utils = _ref.utils,
      slideDirection = _ref.slideDirection,
      yearOffset = _ref.yearOffset;
  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.switchHeader
  }, _react.default.createElement(_IconButton.default, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }, _react.default.createElement(_Icon.default, null, " ", rtl ? rightArrowIcon : leftArrowIcon, " ")), _react.default.createElement(_SlideTransition.default, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, _react.default.createElement(_Typography.default, {
    align: "center",
    variant: "body1"
  }, yearOffset !== 0 ? utils.format(currentMonth, `MMMM ${(utils.getYear(currentMonth) + parseInt(yearOffset, 10)).toString()}`) : utils.getCalendarHeaderText(currentMonth))), _react.default.createElement(_IconButton.default, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }, _react.default.createElement(_Icon.default, null, rtl ? leftArrowIcon : rightArrowIcon))), _react.default.createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return _react.default.createElement(_Typography.default, {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};

exports.CalendarHeader = CalendarHeader;
CalendarHeader.propTypes = {
  currentMonth: _propTypes.default.object.isRequired,
  onMonthChange: _propTypes.default.func.isRequired,
  classes: _propTypes.default.object.isRequired,
  theme: _propTypes.default.object.isRequired,
  leftArrowIcon: _propTypes.default.node,
  rightArrowIcon: _propTypes.default.node,
  disablePrevMonth: _propTypes.default.bool,
  disableNextMonth: _propTypes.default.bool,
  utils: _propTypes.default.object.isRequired,
  slideDirection: _propTypes.default.oneOf(['right', 'left']).isRequired,
  yearOffset: _propTypes.default.number
};
CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  disablePrevMonth: false,
  disableNextMonth: false,
  yearOffset: 0
};

var styles = function styles(theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.unit / 2,
      marginBottom: theme.spacing.unit
    },
    transitionContainer: {
      width: '100%',
      height: 20
    },
    iconButton: {
      zIndex: 2,
      backgroundColor: theme.palette.background.paper,
      '& > *': {
        // label
        backgroundColor: theme.palette.background.paper,
        '& > *': {
          // icon
          zIndex: 1,
          overflow: 'visible'
        }
      }
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
};

var _default = (0, _withStyles.default)(styles, {
  withTheme: true,
  name: 'MuiPickersCalendarHeader'
})((0, _WithUtils.default)()(CalendarHeader));

exports.default = _default;