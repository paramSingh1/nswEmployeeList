import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Employee } from "../../interfaces/Employee";
import { rawFormData } from "../../interfaces/rawFormData";
import Styles from "./AddEmployee.module.scss";
import axios from "axios";
import { addNewEmployee, createEmployee } from "../../services/apiServices";

const AddEmployee = ({ userData }: any) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    userData && reset(userData);
  }, [userData]);

  const {
    register,
    handleSubmit,
    reset,
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
    createEmployee(data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        window.alert(error.message);
      });
  };

  return (
    <div className={Styles.AddEmployee}>
      <div className={Styles.AddEmployee_Header}>
        <small className={Styles.AddEmployee_Header__Back}>
          {<Link to="/"> {`< `}Back</Link>}
        </small>

        <h3 className={Styles.AddEmployee_Header_Text}>Employees' List</h3>
      </div>
      <div className={Styles.AddEmployee_Wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={Styles.AddEmployee_Form}>
            <h3>Personal Information</h3>

            <label htmlFor="firstName">First Name</label>
            <div className={Styles.AddEmployee_Form__Input__Text}>
              <input
                className={Styles.AddEmployee_Form__Input__Text}
                id="firstName"
                {...register("firstName", { required: true })}
                onChange={handleChange}
              />
            </div>

            {errors.firstName && (
              <span className={Styles.AddEmployee_Error}>
                *First Name is required
              </span>
            )}

            <label htmlFor="middleName">Middle Name (if applicable)</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                className={Styles.AddEmployee_Form__Input__Text}
                id="middleName"
                {...register("middleName", { required: false })}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="lastName">Last Name</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                className={Styles.AddEmployee_Form__Input__Text}
                id="lastName"
                {...register("lastName", { required: true })}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && (
              <span className={Styles.AddEmployee_Error}>
                Last Name is required
              </span>
            )}

            <h3>Contact details</h3>

            <label htmlFor="email">Email</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                className={Styles.AddEmployee_Form__Input__Text}
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
            </div>
            {errors.email && (
              <span className={Styles.AddEmployee_Error}>Email is invalid</span>
            )}

            <label htmlFor="mobileNumber">Mobile Number</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                className={Styles.AddEmployee_Form__Input__Text}
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
            </div>
            {errors.mobileNumber && (
              <span className={Styles.AddEmployee_Error}>
                Mobile Number is invalid or missing
              </span>
            )}

            <label htmlFor="resAddress">Residential Address</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                className={Styles.AddEmployee_Form__Input__Address}
                id="resAddress"
                {...register("resAddress", { required: true })}
                onChange={handleChange}
              />
            </div>
            {errors.resAddress && (
              <span className={Styles.AddEmployee_Error}>
                Residential Address is required
              </span>
            )}

            <h3>Employee Status</h3>

            <label htmlFor="contractType">Contract Type</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <div>
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
            </div>
            {errors.contractType && (
              <span className={Styles.AddEmployee_Error}>
                Contract Type is required
              </span>
            )}

            <label htmlFor="startDate">Start Date</label>

            <div className={Styles.AddEmployee_Form__Input}>
              <div className={Styles.AddEmployee_Form__Input__Date}>
                <input
                  className={Styles.AddEmployee_Form__Input__Day}
                  id="startDay"
                  type="number"
                  min="1"
                  max="31"
                  placeholder="DD"
                  {...register("startDay", { required: true, min: 1, max: 31 })}
                  onChange={handleChange}
                />
                <select
                  className={Styles.AddEmployee_Form__Input__Month}
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
                  className={Styles.AddEmployee_Form__Input__Year}
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
            {errors.startDay && (
              <span className={Styles.AddEmployee_Error}>
                Start Day is required
              </span>
            )}
            {errors.startMonth && (
              <span className={Styles.AddEmployee_Error}>
                Start Month is required
              </span>
            )}
            {errors.startYear && (
              <p>Start Year is required and must be between 2000 and 2050</p>
            )}

            <label htmlFor="endDate">End Date</label>

            <div className={Styles.AddEmployee_Form__Input}>
              <div className={Styles.AddEmployee_Form__Input__Date}>
                <input
                  className={Styles.AddEmployee_Form__Input__Day}
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
                  className={Styles.AddEmployee_Form__Input__Month}
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
                  className={Styles.AddEmployee_Form__Input__Year}
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
            {errors.endDay && (
              <span className={Styles.AddEmployee_Error}>
                End Day is required
              </span>
            )}
            {errors.endMonth && (
              <span className={Styles.AddEmployee_Error}>
                End Month is required
              </span>
            )}
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
              {errors.timeBasis && (
                <span className={Styles.AddEmployee_Error}>
                  Time Basis is required
                </span>
              )}
            </div>

            <label htmlFor="weeklyHours">Weekly Hours</label>
            <div className={Styles.AddEmployee_Form__Input}>
              <input
                id="weeklyHours"
                type="number"
                className={Styles.AddEmployee_Form__Input__Hours}
                {...register("weeklyHours", { required: true })}
                onChange={handleChange}
              />
            </div>
            {errors.weeklyHours && (
              <span className={Styles.AddEmployee_Error}>
                Weekly Hours is required
              </span>
            )}

            <div className={Styles.AddEmployee_Form__Btns}>
              <input
                className={Styles.AddEmployee_Form__Btns__Blue}
                type="submit"
                value="Save"
              />
              <Link to="/">
                <button className={Styles.AddEmployee_Form__Btns__Grey}>
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
