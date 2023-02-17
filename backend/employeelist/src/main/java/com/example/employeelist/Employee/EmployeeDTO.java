package com.example.employeelist.Employee;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class EmployeeDTO {

	@NotBlank
	private String firstName;

	private String middleName;

	@NotBlank
	private String lastName;

	@NotBlank
	@Email
	private String email;

	@NotBlank
	@Size(min = 10, max = 10)
	private String mobileNumber;

	@NotBlank
	private String resAddress;

	@NotBlank
	private String contractType;

	@NotBlank
	private String startDate;

	@NotBlank
	private String endDate;
	
	private boolean ongoing;

	@NotBlank
	private String timeBasis;

	@NotNull
	private float weeklyHours;


	public EmployeeDTO(String firstName, String middleName, String lastName, String email, String mobileNumber,
			String resAddress, String contractType, String startDate, String endDate, boolean ongoing, String timeBasis,
			float weeklyHours) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.resAddress = resAddress;
		this.contractType = contractType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.ongoing = ongoing;
		this.timeBasis = timeBasis;
		this.weeklyHours = weeklyHours;
	}

	// Getters and Setters.
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getResAddress() {
		return resAddress;
	}

	public void setResAddress(String resAddress) {
		this.resAddress = resAddress;
	}

	public String getContractType() {
		return contractType;
	}

	public void setContractType(String contractType) {
		this.contractType = contractType;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}
	
	public boolean getOngoing() {
		return ongoing;
	}

	public void setOngoing(boolean ongoing) {
		this.ongoing = ongoing;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getTimeBasis() {
		return timeBasis;
	}

	public void setTimeBasis(String timeBasis) {
		this.timeBasis = timeBasis;
	}

	public float getWeeklyHours() {
		return weeklyHours;
	}

	public void setWeeklyHours(float weeklyHours) {
		this.weeklyHours = weeklyHours;
	}

}
