package com.example.employeelist.Employee;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/employee")
//To avoid CORS error when making calls from front-end, Hosted on port 5173
public class EmployeeController {

	Logger logger = LoggerFactory.getLogger(EmployeeController.class);

	@Autowired
	private EmployeeService service;

	@PostMapping
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody EmployeeDTO data) {
		Employee newEmployee = this.service.addEmployee(data);
		logger.info("Successfully added new Employee");
		return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Employee>> getAll() {
		List<Employee> allEmployees = this.service.getAll();

		logger.info("Successfully Returned all Employees");
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> findById(@PathVariable Long id) {
		Optional<Employee> maybeEmployee = this.service.getById(id);

		if (maybeEmployee.isEmpty()) {
			logger.error("Error: Could not find Employee of ID: ", id);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		logger.info("Successfully Returned Employee of ID: ", id);

		return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@Valid @PathVariable Long id, @RequestBody EmployeeDTO data) {
		Employee toUpdate = this.service.updateEmployee(id, data);
		return new ResponseEntity<>(toUpdate, HttpStatus.OK);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id) {
		boolean isDeleted = this.service.delete(id);
		if (isDeleted) {
			logger.info("Successfully Deleted Employee of ID: ", id);

			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		logger.error("Could not Deleted Employee of ID: ", id);
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

}
