package com.example.employeelist.Employee;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


//@Service annotation allows Spring to know this class is a Service Layer, 
/**@Transactional is used to ensure the safety of our data in our MySQL database. 
 * If in the event of failure / partial data entry insert, the entire entry will not be successful.
 * This is because a transaction occurs, enforcing a contract that the complete data will be inserted into the DB.
 */
@Service
@Transactional
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;
	
	public Employee addEmployee(EmployeeDTO data) {
		Employee newEmployee = new Employee(data.getFirstName(), data.getMiddleName(), data.getLastName(), data.getEmail(), data.getMobileNumber(), data.getResAddress(), data.getContractType(), data.getStartDate(), data.getEndDate(), data.getOngoing(), data.getTimeBasis(), data.getWeeklyHours());
		this.repository.save(newEmployee);
		return newEmployee;
	}
	
}
