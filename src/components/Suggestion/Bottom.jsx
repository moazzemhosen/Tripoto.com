import React from "react";
import "./Bottom.css";
const Bottom = () => {
  return (
    <div>
      <div className="head2">
        <h1>Budget for Goa</h1>
      </div>
      <div className="para2">
        <b>For Budget Travellers: INR 600 - 1200 a day</b>
        <div className="bullet">
          <ul>
            <li>
              Accommodation in hostels and guesthouses: INR 200 - 800 (up to INR
              1200 in peak season)
            </li>
            <li>Food in beach shacks and street eateries: INR 200 - 400</li>
            <li>Public Transport in buses and autorickshaws: INR 8 - 40</li>
            <li>Motorbike rentals: INR 200 - 400</li>
            <li>Sightseeing (museums etc): INR 10 - 50</li>
          </ul>
          <div className="para">
            <b>For Mid-range Travellers: INR 1000 to INR 3000 a day</b>
          </div>
          <div className="bullet">
            <ul>
              <li>
                Accommodation in mid-range hotels and resorts: INR 600 - 2000
              </li>
              <li>Food in mid-range cafes and restaurants: INR 400 - 700</li>
              <li>
                Local transport in local taxis or car rentals: INR 400 - 600
              </li>
              <li>Snorkelling and Diving packages: INR 1500 and upwards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
