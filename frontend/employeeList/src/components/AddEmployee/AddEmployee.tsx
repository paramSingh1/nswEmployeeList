import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const AddEmployee = () => {
  type Inputs = {
    example: string;
    exampleRequired: string;
  };

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();

  const onSubmit: SubmitHandler<Employee> = (data) => console.log(data);

  return (
    <div>
      AddEmployee
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>First Name is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEmployee;
