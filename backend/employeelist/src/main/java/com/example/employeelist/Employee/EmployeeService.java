package com.example.employeelist.Employee;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


//@Service annotation allows Spring to know this class is a Service Layer, 
/**
 * @Transactional is used to ensure the safety of our data in our MySQL
 *                database. If in the event of failure / partial data entry
 *                insert, the entire entry will not be successful. This is
 *                because a transaction occurs, enforcing a contract that the
 *                complete data will be inserted into the DB.
 */
@Service
@Transactional
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;

	public Employee addEmployee(EmployeeDTO data) {
		Employee newEmployee = new Employee(data.getFirstName(), data.getMiddleName(), data.getLastName(),
				data.getEmail(), data.getMobileNumber(), data.getResAddress(), data.getContractType(),
				data.getStartDate(), data.getEndDate(), data.getOngoing(), data.getTimeBasis(), data.getWeeklyHours());
		this.repository.save(newEmployee);
		return newEmployee;
	}
	
	public List<Employee> getAll(){
		return this.repository.findAll();
	} 
	
	public Optional<Employee> getById(Long id){
		return this.repository.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Employee> maybeEmployee= this.getById(id);
		if (maybeEmployee.isEmpty()) {
			return false;
		}
		this.repository.delete(maybeEmployee.get());
		return true;
	}
	
	public Employee updateEmployee(Long id, EmployeeDTO data) {
		Optional<Employee> maybeEmployee = this.getById(id);
		
		if(maybeEmployee.isEmpty()) {
			throw new EntityNotFoundException("No Employee found with the id of : " + id);
		}
		Employee foundEmployee = maybeEmployee.get();
		
		foundEmployee.setFirstName(data.getFirstName());
		foundEmployee.setMiddleName(data.getMiddleName());
		foundEmployee.setLastName(data.getLastName());
		foundEmployee.setEmail(data.getEmail());
		foundEmployee.setMobileNumber(data.getMobileNumber());
		foundEmployee.setResAddress(data.getResAddress());
		foundEmployee.setContractType(data.getContractType());
		foundEmployee.setStartDate(data.getStartDate());
		foundEmployee.setEndDate(data.getEndDate());
		foundEmployee.setOngoing(data.getOngoing());
		foundEmployee.setWeeklyHours(data.getWeeklyHours());
		
		this.repository.save(foundEmployee);
		return foundEmployee;
		
	}

}
