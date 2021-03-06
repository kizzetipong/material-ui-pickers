import React, { Fragment, PureComponent } from 'react';
import { DatePicker } from 'material-ui-pickers';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

export default class BasicDatePicker extends PureComponent {
  state = {
    selectedDate: '2018-01-01T00:00:00.000Z',
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling
          />
        </div>

        <div className="picker">
          <MuiPickersUtilsProvider utils={MomentUtils} locale="th" moment={moment}>
            <DatePicker
              label="with B.E. yearOffset"
              yearOffset={543}
              pickerHeaderFormat="ddd D MMM"
              format="dddd D MMMM YYYY"
              value={selectedDate}
              onChange={this.handleDateChange}
              animateYearScrolling
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className="picker">
          <DatePicker
            autoOk
            label="Clearable"
            clearable
            disableFuture
            maxDateMessage="Date must be less than today"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>

        <div className="picker">
          <DatePicker
            label="With today button"
            showTodayButton
            maxDateMessage="Date must be less than today"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>
      </Fragment>
    );
  }
}
