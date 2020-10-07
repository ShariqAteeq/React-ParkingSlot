import React from 'react';
import { NavLink , Link } from "react-router-dom";
import { DatePicker, TimePicker, Avatar } from "antd";
import { logout } from "../../store/actions/authActions";
import { connect } from "react-redux";
import {
    DiffFilled,
    DatabaseFilled,
    MessageFilled,
    NodeCollapseOutlined,
  } from "@ant-design/icons";

const Sidebar = (props) => {
    return (
        <div className="home-sidebar">
            <Avatar
              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              size={104}
              className="home-avatar"
            />
            <h3 className="home-title">Shariq Ateeq</h3>

            <NavLink
              to="/reserve"
              className="home-link"
              activeClassName="home-link-active"
            >
                <DiffFilled className="home-icon" />
                <p className = "home-text">Reserve Parking</p>
            </NavLink>

            <NavLink
              to="/my"
              className="home-link"
              activeClassName="home-link-active"
            >
              <div className="home-group">
                <DatabaseFilled className="home-icon" />
                <p className = "home-text">My Parking</p>
              </div>
            </NavLink>

            <NavLink
              to="/"
              className="home-link"
            >
              <div className="home-group">
                <MessageFilled className="home-icon" />
                <p className = "home-text">Feedback</p>
              </div>
            </NavLink>
            <Link
              onClick = {() => props.logout()}
              className="home-link"
            >
              <div className="home-group">
                <NodeCollapseOutlined className="home-icon" />
                <p className = "home-text">Logout</p>
              </div>
            </Link>
          </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(null, mapDispatchToProps)(Sidebar);
