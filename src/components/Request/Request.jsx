import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import firebase from '../../utils/firebase';
import "./request-styles.css";



function Request() {
  const [id, setId] = useState('');
    const [time, setTime] = useState("11:50:39");
    const [date, setDate] = useState(new Date("1970-01-01T" + time + "Z"));
    const [station, setStation] = useState('');
    const [paint, setPaint] = useState('');
    const [status] = useState('Pending');
    const database = firebase.database();
    let highestId = 0;

     const handleTimeChange = (e) => {
        setTime(e.target.value);
      }
      const handleStationChange = (e) => {
        setStation(e.target.value);
      }
      const handlePaintChange = (e) => {
        setPaint(e.target.value);
      }
      const handleDateChange = (e) => {
        setDate(e.target.value);
      }

      
    const handleSubmit = (e) => {
        e.preventDefault();
        if (date === '' || station === '' || paint === '') {
          toast.error("Please fill in all fields");
          return;
        }
        database.ref("orders").once("value").then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            let childData = childSnapshot.val();
            if (childData.id > highestId) {
              highestId = childData.id;
            }
          });
          highestId++;
          setId(highestId);
          database.ref("orders").child(highestId.toString()).set({
            id: highestId,
            date: date,
            time: time,
            station: station,
            paint: paint,
            status: status
        });
        toast("Order added successfully");;
      });
}


    return(
        <div className="wrap">
        <div className="request_form">
          <h1 className="form_title">Order Request Form</h1>
            <ToastContainer />
        <form onSubmit={handleSubmit} className="requestForm">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={handleDateChange} value={date}></input><br />

            <label htmlFor="time">Time</label>
            <input type="time" id="time" onChange={handleTimeChange} value={time}></input><br />

            <div className="station_selection">
            <p>Choose Station: </p><br />
            <input type="radio" id="stationA" name="station" value="stationA" onChange={handleStationChange}  checked={station === "stationA"} />
            <label htmlFor="stationA">Station A</label><br /><br />
            <input type="radio" id="stationB" name="station" value="stationB" onChange={handleStationChange}  checked={station === "stationB"}/>
            <label htmlFor="stationB">Station B</label><br /><br />
            </div>

            <label htmlFor="paint">Paint</label>
            <input type="text" id="paint" name="paint" onChange={handlePaintChange} value={paint}></input><br />
            <br /><br />
            <input type="submit" value="Submit"></input>
        </form>
      </div>
      </div>
            );
}
export default Request;