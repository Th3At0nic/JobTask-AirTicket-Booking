import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SelectCityForm = () => {
  const [formData, setFormData] = useState([]);
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
    console.log(data);
    setFormData(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <input className="btn btn-primary " type="submit" />
    </form>
  );
};

export default SelectCityForm;
