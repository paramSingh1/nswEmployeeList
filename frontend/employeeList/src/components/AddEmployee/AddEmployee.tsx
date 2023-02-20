import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./AddEmployee.module.scss";

const AddEmployee = ({ userData }: any) => {
  const navigate = useNavigate();

  interface Employee {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    resAddress: string;
    contractType: string;
    startDate: string;
    endDate: string;
    ongoing: boolean;
    timeBasis: string;
    weeklyHours: number;
  }

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    userData && setFormData(userData);
  }, [userData]);

  console.log(formData, "fd");

  interface rawFormData {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    resAddress: string;
    contractType: string;
    startDay: number;
    startMonth: string;
    startYear: number;
    endDay: number;
    endMonth: string;
    endYear: number;
    ongoing: boolean;
    timeBasis: string;
    weeklyHours: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<rawFormData>({
    mode: "all",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    console.log(event.target.name, event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const onSubmit: SubmitHandler<rawFormData> = (data) => {
    const formattedForm: Employee = {
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      resAddress: data.resAddress,
      contractType: data.contractType,
      startDate: `${data.startYear}-${data.startMonth}-${data.startDay}`,
      endDate: `${data.endYear}-${data.endMonth}-${data.endDay}`,
      ongoing: data.ongoing,
      timeBasis: data.timeBasis,
      weeklyHours: data.weeklyHours,
    };

    axios.post("http://localhost:8080/employee", formattedForm).then((res) => {
      console.log(res.data);
      navigate("/");
    });
  };

  return (
    <div className={Styles.AddEmployee}>
      <div className={Styles.AddEmployee_Header}>
        <h3 className={Styles.AddEmployee_Header_Text}>Employees' List</h3>
      </div>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.AddEmployee_Form}>
          <h3>Personal Information</h3>

          <label htmlFor="firstName">First Name</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="firstName"
              {...register("firstName", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && <span>*First Name is required</span>}

          <label htmlFor="middleName">Middle Name (if applicable)</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="middleName"
              {...register("middleName", { required: false })}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="lastName"
              {...register("lastName", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.lastName && <p>Last Name is required</p>}

          <h3>Contact details</h3>

          <label htmlFor="email">Email</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              onChange={handleChange}
            />
            {errors.email?.message && (
              <p>{errors.email.message && `email is required`}</p>
            )}
          </div>

          <label htmlFor="mobileNumber">Mobile Number</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="mobileNumber"
              {...register("mobileNumber", {
                required: true,
                pattern: {
                  value: /^04\d{8}$/,
                  message:
                    "Input does not match 10 digit Australian mobile number format",
                },
              })}
              onChange={handleChange}
            />
            {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
          </div>

          <label htmlFor="resAddress">Residential Address</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="resAddress"
              {...register("resAddress", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.resAddress && <p>Residential Address is required</p>}

          <h3>Employee Status</h3>

          <label htmlFor="contractType">Contract Type</label>
          <div className={Styles.AddEmployee_Form__Input__check}>
            <div>
              <input
                id="contractType"
                type="radio"
                checked={formData && formData.contractType == "Permanent"}
                value="Permanent"
                {...register("contractType", { required: true })}
                onChange={handleChange}
              />
              <label htmlFor="contractType">Permanent</label>
            </div>
            <div>
              <input
                id="contractType"
                type="radio"
                checked={formData && formData.contractType == "Contract"}
                value="Contract"
                {...register("contractType", { required: true })}
                onChange={handleChange}
              />
              <label htmlFor="contractType">Contract</label>
            </div>
          </div>
          {errors.contractType && <p>Contract Type is required</p>}

          <label htmlFor="startDate">Start Date</label>

          <div className={Styles.AddEmployee_Form__Input}>
            <div className={Styles.AddEmployee_Form__Input__Date}>
              <input
                id="startDay"
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                {...register("startDay", { required: true, min: 1, max: 31 })}
                onChange={handleChange}
              />
              <select
                id="startMonth"
                {...register("startMonth", { required: true })}
                onChange={handleChange}
              >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <input
                id="startYear"
                type="number"
                placeholder="YYYY"
                {...register("startYear", {
                  required: true,
                  min: 2000,
                  max: 2050,
                })}
                onChange={handleChange}
              />
            </div>
          </div>
          {errors.startDay && <p>Start Day is required</p>}
          {errors.startMonth && <p>Start Month is required</p>}
          {errors.startYear && (
            <p>Start Year is required and must be between 2000 and 2050</p>
          )}

          <label htmlFor="endDate">End Date</label>

          <div className={Styles.AddEmployee_Form__Input}>
            <div className={Styles.AddEmployee_Form__Input__Date}>
              <input
                id="endDay"
                type="number"
                min="1"
                max="31"
                placeholder="DD"
                {...register("endDay", { required: true, min: 1, max: 31 })}
                onChange={handleChange}
              />
              <select
                id="endMonth"
                {...register("endMonth", { required: true })}
                onChange={handleChange}
              >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <input
                id="endYear"
                type="number"
                placeholder="YYYY"
                {...register("endYear", {
                  required: true,
                  min: 2000,
                  max: 2050,
                })}
                onChange={handleChange}
              />
            </div>
          </div>
          {errors.endDay && <p>End Day is required</p>}
          {errors.endMonth && <p>End Month is required</p>}
          {errors.endYear && (
            <p>End Year is required and must be between 2000 and 2050</p>
          )}
          <div className={Styles.AddEmployee_Form__Input__check}>
            <input
              id="ongoing"
              type="checkbox"
              defaultChecked={formData && formData.ongoing == true}
              {...register("ongoing")}
              onChange={handleChange}
            />
            <label htmlFor="ongoing">Ongoing</label>
          </div>

          <div className={Styles.AddEmployee_Form__Input__check}>
            <label htmlFor="timeBasis">Time Basis</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                id="timeBasis"
                type="radio"
                value="fullTime"
                {...register("timeBasis", { required: true })}
                onChange={handleChange}
              />
              <label htmlFor="timeBasis">Full-time</label>
            </div>

            <div className={Styles.AddEmployee_Form__Input}>
              <input
                id="timeBasis"
                type="radio"
                value="partTime"
                {...register("timeBasis", { required: true })}
                onChange={handleChange}
              />
              <label htmlFor="timeBasis">Part-time</label>
            </div>
            {errors.timeBasis && <p>Time Basis is required</p>}
          </div>

          <label htmlFor="weeklyHours">Weekly Hours</label>
          <div className={Styles.AddEmployee_Form__Input}>
            <input
              id="weeklyHours"
              type="number"
              {...register("weeklyHours", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.weeklyHours && <p>Weekly Hours is required</p>}

          <div className={Styles.AddEmployee_Form__Btns}>
            <input type="submit" value="Save" />
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
