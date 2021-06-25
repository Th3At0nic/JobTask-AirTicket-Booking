import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Payment from "../Payment/Payment";
// import { useHistory } from "react-router-dom";
const SelectCityForm = () => {
  // let history = useHistory();
  const [formData, setFormData] = useState([]);
  const [submit, setSubmit] = useState(false);

  const handleClick = () => {
    console.log("clicked next");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.class === "Economy" && data.to === "Chittagong, Bangladesh") {
      data.cost = 12000;
    } else if (data.class === "Economy" && data.to === "Mumbai, India") {
      data.cost = 34500;
    } else if (data.class === "Economy" && data.to === "NewYork, USA") {
      data.cost = 100000;
    } else if (
      data.class === "Business" &&
      data.to === "Chittagong, Bangladesh"
    ) {
      data.cost = 18000;
    } else if (data.class === "Business" && data.to === "Mumbai, India") {
      data.cost = 40500;
    } else if (data.class === "Business" && data.to === "NewYork, USA") {
      data.cost = 130000;
    }
    setFormData(data);
    setSubmit(true);

    // history.push("/payment");
  };
  console.log(formData);
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Enter Date</h3>
        <input type="date" required {...register("date")} />
        <h3>Select Class</h3>
        <select className="form-control mb-3" {...register("class")}>
          <option value="Economy">Economy Class</option>
          <option value="Business">Business Class</option>
          <option disabled value="First">
            First Class
          </option>
        </select>
        <h3>From</h3>
        <select className="form-control mb-3" {...register("from")}>
          <option value="Dhaka, Bangladesh">Dhaka, Bangladesh</option>
          <option disabled value="Chittagong, Bangladesh">
            Chittagong, Bangladesh
          </option>
          <option disabled value="Mumbai, India">
            Mumbai, India
          </option>
          <option disabled value="NewYork, USA">
            NewYork, USA
          </option>
        </select>
        <div className="row">
          <div className="col-md-6">
            <h3>To</h3>
          </div>
          <div className="col-md-6 d-flex align-items-end justify-content-end text-primary">
            Cost: {formData.cost}
          </div>
        </div>
        <select className="form-control mb-3" {...register("to")}>
          <option value="Chittagong, Bangladesh">Chittagong, Bangladesh</option>
          <option value="Mumbai, India">Mumbai, India</option>
          <option value="NewYork, USA">NewYork, USA</option>
        </select>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <div>
          <input className="btn btn-primary " type="submit" />
        </div>
      </form>
      {submit && (
        <span className="text-success">
          Submitted Successfully! to process payment please Click{" "}
          <Link to="/payment">
            <button onClick={handleClick} className="btn btn-success">
              Next
            </button>
          </Link>
        </span>
      )}
    </section>
  );
};

export default SelectCityForm;
