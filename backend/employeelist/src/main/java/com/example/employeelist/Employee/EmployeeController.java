package com.example.employeelist.Employee;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService service;
	
	@GetMapping
	public String helloWorld() {
		return "Hello world";
	}
	@PostMapping
	public ResponseEntity<Employee> addEmployee(@Valid @RequestBody EmployeeDTO data){
		Employee newEmployee = this.service.addEmployee(data);
		return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
	}
	
}
