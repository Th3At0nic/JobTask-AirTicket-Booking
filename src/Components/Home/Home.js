import React from "react";
import "react-calendar/dist/Calendar.css";
import Seat from "../Seat/Seat";
import SelectCityForm from "../SelectCityForm/SelectCityForm";

const Home = () => {
  return (
    <section className="container">
      <div>
        <div>
          <Seat />
        </div>
      </div>

      <SelectCityForm />
    </section>
  );
};

export default Home;
