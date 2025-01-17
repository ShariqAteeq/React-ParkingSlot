import React, { Component } from "react";
import { DatePicker, TimePicker, Steps, Button, message } from "antd";
import { bookReserv } from "../../store/actions/parkActions";
import { connect } from "react-redux";
import { Radio } from "antd";
const { Step } = Steps;

const steps = [
  {
    title: "Select Area",
  },
  {
    title: "Select Date & Time",
  },
  {
    title: "Select Slot",
  },
];

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.bhejdo = this.bhejdo.bind(this);
    this.state = {
      name: "",
      hour: 1,
      startTime: null,
      endTime: null,
      Date: "",
      area: "",
      slot: '',
      current: 0,
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  timeChange(time) {
    let t = time;
    if (t != null) {
      t = t._d.getHours();
    } else {
      t = null;
    }
    this.setState({
      startTime: t,
    });
  }

  onChange(date, dateString) {
    console.log(date, dateString);
    this.setState({
      Date: dateString,
    });
  }

  bhejdo() {
    let endTime = this.state.startTime + parseInt(this.state.hour);
    let res = {
      startTime: this.state.startTime,
      endTime: endTime,
      area: this.state.area,
      date: this.state.Date,
      slot: this.state.slot,
      hour: parseInt(this.state.hour)
    };

    console.log(res);

    this.props.bookReserv(res);

    let data = {
      start: 1,
      end: 4,
    };

    if (res.start >= data.start && res.start <= data.end) {
      console.log("already booked");
    } else {
      console.log("not booked");
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    let content;
    if (current == 1) {
      content = (
        <div className="res-1">
          <p className="res-1-head">Reservation Date</p>
          <DatePicker onChange={this.onChange} className="res-datePicker" />
          <div className="res-1-sub">
            <div className="res-1-flex">
              <p className="res-1-head">Timing</p>
              <TimePicker
                onChange={this.timeChange}
                use12Hours
                format="h A"
                className="time"
                style={{ color: "brown" }}
              />
            </div>
            <div className="res-1-flex">
              <p className="res-1-head">No of Hours</p>
              <select
                value={this.state.hour}
                onChange={this.handleChange}
                name="hour"
                className="res-select"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
        </div>
      );
    } else if (current == 0) {
      content = (
        <div className="res-2">
          <Radio.Group name = "area"
            onChange={this.handleChange}
            className="res-grpBtn"
          >
            <Radio.Button className="res-btn" value="1st-Floor">
              1st Floor
            </Radio.Button>
            <Radio.Button className="res-btn" value="2nd-Floor">
              2nd Floor
            </Radio.Button>
            <Radio.Button className="res-btn" value="3rd-Floor">
              3rd Floor
            </Radio.Button>
          </Radio.Group>
        </div>
      );
    } else {
      content = (
        <div className="res-3">
          <Radio.Group name = "slot"
            onChange={this.handleChange}
            className="res-grpBtn"
          >
            <Radio.Button className="res-3-btn" value="slot1">
              Slot 1
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot2">
              Slot 2
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot3">
              Slot 3
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot4">
              Slot 4
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot5">
              Slot 5
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot6">
              Slot 6
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot7">
              Slot 7
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot8">
              Slot 8
            </Radio.Button>
            <Radio.Button className="res-3-btn" value="slot9">
              Slot 9
            </Radio.Button>
          </Radio.Group>
        </div>
      );
    }

    return (
      <div className="res">
        <h3 className="res-title">Reserve Parking Slot</h3>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={this.bhejdo}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookReserv: (d) => dispatch(bookReserv(d)),
  };
};
export default connect(null, mapDispatchToProps)(Reserve);
