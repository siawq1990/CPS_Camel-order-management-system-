import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import firebase from '../../utils/firebase';
import 'firebase/database';
import "react-toastify/dist/ReactToastify.css";
import "./stationB-styles.css";





function StationB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = firebase.database();
    const ref = database.ref("orders");
    ref.on('value', async snapshot => {
      let data = snapshot.val();
      let dataArray = Object.values(data);
      setData(dataArray);
    });
    return () => ref.off();
  }, []);

  const stationBData = data.filter(item => item.station === "stationB");



    return(
      <div className="stationb">
        <ToastContainer />
        <div className="header">
          <h1>Order List in Station B</h1>
          </div>
          <div className="report">
      <table className="reportTable">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Station</th>
          <th>Paint</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {stationBData.map((item, index) =>  (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.station}</td>
            <td>{item.paint}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
            
            );
}
export default StationB;