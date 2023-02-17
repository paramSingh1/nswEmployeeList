package com.example.employeelist.Employee;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@Column
	private String firstName;

	@Column
	private String middleName;

	@Column
	private String lastName;

	@Column
	private String email;

	@Column
	private String mobileNumber;

	@Column
	private String resAddress;

	@Column
	private String contractType;

	@Column
	private String startDate;

	@Column
	private String endDate;

	@Column
	boolean ongoing;

	@Column
	private String timeBasis;

	@Column
	private float weeklyHours;

	// Empty Constructor to mitigate Spring's Default constructor not found error
	public Employee() {
	}

	// Constructor
	public Employee(String firstName, String middleName, String lastName, String email, String mobileNumber,
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

	// Getters and setters to access private fields for additional security - (Encapsulation)
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public boolean isOngoing() {
		return ongoing;
	}

	public void setOngoing(boolean ongoing) {
		this.ongoing = ongoing;
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