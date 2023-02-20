import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import Styles from "./EmployeeDetails.module.scss";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  interface Employee {
    id: number;
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
  interface rawFormData {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    resAddress: string;
    contractType: string;
    startDay: any;
    startMonth: string;
    startYear: any;
    endDay: any;
    endMonth: string;
    endYear: any;
    ongoing: boolean;
    timeBasis: string;
    weeklyHours: number;
  }
  const [userData, setUserData] = useState<Employee>({
    id: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    resAddress: "",
    contractType: "",
    startDate: "",
    endDate: "",
    ongoing: false,
    timeBasis: "",
    weeklyHours: 0,
  });
  const [formData, setFormData] = useState({});

  const [defaultValues, setDefaultValues] = useState<rawFormData>({
    id: 0,
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    resAddress: "",
    contractType: "",
    startYear: "",
    startMonth: "",
    startDay: "",
    endYear: "",
    endMonth: "",
    endDay: "",
    ongoing: false,
    timeBasis: "",
    weeklyHours: 0,
  });

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/employee/${id}`);
        setUserData(res.data);
        reset(res.data);
      } catch (error: any) {
        if (error.response.status == 404) {
          window.alert(`user of ID : ${id} cannot be found`);
        }
        console.error(error.message);
      }
    };

    getUserDetails();
  }, [id]);

  useEffect(() => {
    setDefaultValues({
      id: userData.id,
      firstName: userData.firstName,
      middleName: userData.middleName,
      lastName: userData.lastName,
      email: userData.email,
      mobileNumber: userData.mobileNumber,
      resAddress: userData.resAddress,
      contractType: userData.contractType,
      startYear: userData.startDate.split("-")[0],
      startMonth: userData.startDate.split("-")[1],
      startDay: userData.startDate.split("-")[2],
      endYear: userData.endDate.split("-")[0],
      endMonth: userData.endDate.split("-")[1],
      endDay: userData.endDate.split("-")[2],
      ongoing: userData.ongoing,
      timeBasis: userData.timeBasis,
      weeklyHours: userData.weeklyHours,
    });
    reset(defaultValues);
  }, [userData]);

  const handleChange = (event: { target: { name: any; value: any } }) => {
    console.log(event.target.name, event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<rawFormData>({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    const formattedForm: Employee = {
      id: data.id,
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
    await axios
      .put(`http://localhost:8080/employee/${data.id}`, formattedForm)
      .then((res) => {
        console.log(res.data, "submitted data");
        navigate("/");
      });

    console.log(data, "2323bwebfweifbwfbwh");
    console.log(formattedForm, "swsw");
  };

  return (
    <div className={Styles.EmployeeDetails}>
      <div className={Styles.EmployeeDetails_Header}>
        <small className={Styles.EmployeeDetails_Header__Back}>
          {<Link to="/"> {`< `}Back</Link>}
        </small>
        <h3 className={Styles.EmployeeDetails_Header_Text}>
          Employees Details
        </h3>
      </div>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.EmployeeDetails_Form}>
          <h3>Personal Information</h3>

          <label htmlFor="firstName">First Name</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
            <input
              id="firstName"
              {...register("firstName", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && (
            <span className={Styles.EmployeeDetails_Error}>
              *First Name is required
            </span>
          )}

          <label htmlFor="middleName">Middle Name (if applicable)</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
            <input
              id="middleName"
              {...register("middleName", { required: false })}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="lastName">Last Name</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
            <input
              id="lastName"
              {...register("lastName", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.lastName && (
            <span className={Styles.EmployeeDetails_Error}>
              Last Name is required
            </span>
          )}

          <h3>Contact details</h3>

          <label htmlFor="email">Email</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
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
              <span className={Styles.EmployeeDetails_Error}>
                {errors.email.message && `email is required`}
              </span>
            )}
          </div>

          <label htmlFor="mobileNumber">Mobile Number</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
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
            {errors.mobileNumber && (
              <span className={Styles.EmployeeDetails_Error}>
                {errors.mobileNumber.message}
              </span>
            )}
          </div>

          <label htmlFor="resAddress">Residential Address</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
            <input
              id="resAddress"
              {...register("resAddress", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.resAddress && (
            <span className={Styles.EmployeeDetails_Error}>
              Residential Address is required
            </span>
          )}

          <h3>Employee Status</h3>

          <label htmlFor="contractType">Contract Type</label>
          <div className={Styles.EmployeeDetails_Form__Input__check}>
            <div>
              <input
                id="contractType"
                type="radio"
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
                value="Contract"
                {...register("contractType", { required: true })}
                onChange={handleChange}
              />
              <label htmlFor="contractType">Contract</label>
            </div>
          </div>
          {errors.contractType && (
            <span className={Styles.EmployeeDetails_Error}>
              Contract Type is required
            </span>
          )}

          <label htmlFor="startDate">Start Date</label>

          <div className={Styles.EmployeeDetails_Form__Input}>
            <div className={Styles.EmployeeDetails_Form__Input__Date}>
              <input
                id="startDay"
                type="number"
                min="1"
                max="31"
                defaultValue={userData.startDate.split("-")[2]}
                placeholder="DD"
                {...register("startDay", { required: true, min: 1, max: 31 })}
                onChange={handleChange}
              />

              <Controller
                control={control}
                name="startMonth"
                render={(props) => (
                  <select
                    value={props.field.value}
                    id="startMonth"
                    {...register("startMonth", { required: true })}
                    onChange={(e) => props.field.onChange(e.target.value)}
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
                )}
              />

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
          {errors.startDay && (
            <span className={Styles.EmployeeDetails_Error}>
              Start Day is required
            </span>
          )}
          {errors.startMonth && (
            <span className={Styles.EmployeeDetails_Error}>
              Start Month is required
            </span>
          )}
          {errors.startYear && (
            <span className={Styles.EmployeeDetails_Error}>
              Start Year is required and must be between 2000 and 2050
            </span>
          )}

          <label htmlFor="endDate">End Date</label>

          <div className={Styles.EmployeeDetails_Form__Input}>
            <div className={Styles.EmployeeDetails_Form__Input__Date}>
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
          {errors.endDay && (
            <span className={Styles.EmployeeDetails_Error}>
              End Day is required
            </span>
          )}
          {errors.endMonth && (
            <span className={Styles.EmployeeDetails_Error}>
              End Month is required
            </span>
          )}
          {errors.endYear && (
            <span className={Styles.EmployeeDetails_Error}>
              End Year is required and must be between 2000 and 2050
            </span>
          )}
          <div className={Styles.EmployeeDetails_Form__Input__check}>
            <input
              id="ongoing"
              type="checkbox"
              {...register("ongoing")}
              onChange={handleChange}
            />
            <label htmlFor="ongoing">Ongoing</label>
          </div>

          <div className={Styles.EmployeeDetails_Form__Input__check}>
            <label htmlFor="timeBasis">Time Basis</label>
            <div className={Styles.EmployeeDetails_Form__Input}>
              <input
                id="timeBasis"
                type="radio"
                value="fullTime"
                {...register("timeBasis", { required: true })}
                onChange={handleChange}
              />
              <label htmlFor="timeBasis">Full-time</label>
            </div>

            <div className={Styles.EmployeeDetails_Form__Input}>
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
              <span className={Styles.EmployeeDetails_Error}>
                Time Basis is required
              </span>
            )}
          </div>

          <label htmlFor="weeklyHours">Weekly Hours</label>
          <div className={Styles.EmployeeDetails_Form__Input}>
            <input
              id="weeklyHours"
              type="number"
              {...register("weeklyHours", { required: true })}
              onChange={handleChange}
            />
          </div>
          {errors.weeklyHours && (
            <span className={Styles.EmployeeDetails_Error}>
              Weekly Hours is required
            </span>
          )}

          <div className={Styles.EmployeeDetails_Form__Btns}>
            <input
              className={Styles.EmployeeDetails_Form__Btns__Blue}
              type="submit"
              value="Save"
            />
            <Link to="/">
              <button className={Styles.EmployeeDetails_Form__Btns__Grey}>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeDetails;
