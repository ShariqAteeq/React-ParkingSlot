import React, { Component } from "react";
import { MyParkings , deleteParking } from "../../store/actions/parkActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MyParking extends Component {
  render() {
    console.log(this.props.parkings, this.props.userId);

    let { parkings } = this.props;
    let myPark = [];
    let userId = localStorage.getItem("userId");
    parkings.map((park) => {
      if (park.userId == userId) {
        myPark.push(park);
      }
    });

    let not = 'AM';
    myPark.map(park => {
      
    })
    

    return (
      <div className="my">
        <h2 className="res-title">My Reservations</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Area</th>
          
                <th>Starting Time</th>
                <th>Ending Time</th>
                <th>Slot</th>
                <th>Operation</th>
              </tr>
            </thead>
            {myPark.map((data) => {
                let not = 'AM';
                if(data.startTime > 12 || data.endTime > 12){
                  not = 'PM';
                }
              return (
                <tbody>
                  <tr>
                    <td>{data.date}</td>
                    <td>{data.area}</td>
              <td>{data.startTime} {not}</td>
              <td>{data.endTime} {not}</td>
                    <td>{data.slot}</td>
                    <td>
                      <button className = "table-btn" onClick = {() => this.props.deleteParking(data.id)}>Remove</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    parkings: state.park.parkings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MyParkings: () => dispatch(MyParkings()),
    deleteParking: (id) => dispatch(deleteParking(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyParking);
