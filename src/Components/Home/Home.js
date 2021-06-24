import React from "react";
import SelectCityForm from "../SelectCityForm/SelectCityForm";
const Home = () => {
  return (
    <section className="container">
      {/* <form >
        <fieldset>
          <h3>From</h3>
          <div class="form-group">
            <label for="disabledSelect">Select Country</label>
            <select id="disabledSelect" class="form-control">
              <option>Dhaka, Bangladesh</option>
              <option disabled>Chittagong, Bangladesh</option>
              <option disabled>Mumbai, India</option>
              <option disabled>NewYork, USA</option>
            </select>
          </div>
          <h3>To</h3>
          <div class="form-group">
            <label for="disabledSelect">Select City</label>
            <select id="disabledSelect" class="form-control">
              <option>Chittagong, Bangladesh</option>
              <option>Mumbai, India</option>
              <option>NewYork, USA</option>
            </select>
          </div>

          <button type="submit" class={"btn btn-primary"}>
            Next
          </button>
        </fieldset>
      </form> */}
      <SelectCityForm />
    </section>
  );
};

export default Home;
