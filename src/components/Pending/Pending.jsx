import React, { useState, useEffect } from "react";
import firebase from '../../utils/firebase';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./pending-styles.css";

function Pending() {
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

      const pendingData = data.filter(item => item.status === "Pending");
      
      const handleStatusChange = (Id, date, time, station, paint, newStatus) => {
        updateStatus(Id, date, time, station, paint, newStatus);
        setData(data.filter((item => item.id !==Id)));
      };   
      
      const updateStatus = (Id, date, time, station, paint, newStatus) => {
        const database = firebase.database();
        const ref = database.ref(`/orders/${Id}`);
        ref.set({ 
            id: Id,
            date: date,
            time: time,
            station: station,
            paint: paint,
            status: newStatus });
            toast("Order updated successfully");
      };

  return (
    <div className="PendingView">
        <ToastContainer />
        <div className="header">
            <h1>Order Pending List</h1>
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
      {pendingData.map(item => (
  <tr key={item.id}>
    <td>{item.date}</td>
    <td>{item.time}</td>
    <td>{item.station}</td>
    <td>{item.paint}</td>
    {item.status === "Pending" && (
      <td>
        <div className="button">
        <button className="successbtn"
          type="button"
          onClick={() => handleStatusChange(item.id, item.date, item.time, item.station, item.paint, "success")}
        >
          Success
        </button>
        <button className="failbtn"
          type="button"
          onClick={() => handleStatusChange(item.id, item.date, item.time, item.station, item.paint, "fail")}
        >
          Failed
        </button>
        </div>
      </td>
    )}
  </tr>
))}
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default Pending;
