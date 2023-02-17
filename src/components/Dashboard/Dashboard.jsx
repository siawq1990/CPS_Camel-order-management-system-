import { ToastContainer } from "react-toastify";
import "./dashboard-styles.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import 'firebase/database';

function Dashboard() {
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

  return (
    <div className="dashboard">
      <ToastContainer />
      <div className="header">
        <h1>Dashboard</h1>
        <h2>Order List</h2>
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
      {data.map(item => (
          <tr key={item.Id}>
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

export default Dashboard;
