package com.example.employeelist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Controller;

import com.example.employeelist.Employee.EmployeeController;

import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;

//@SpringBootTest
@AutoConfigureMockMvc
@DataJpaTest
public class EmployeeControllerTests {

	@Autowired
	private EmployeeController controller;
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void controllerLoads() throws Exception{
		assertThat(controller).isNotNull();
	}
	
	@Test
	void testGetAllEmployees() throws Exception {
		this.mockMvc.perform(get("/employee")).andExpect(status().isOk());
	}
	
	@Test
	void testGetEmployeeById() throws Exception {
		this.mockMvc.perform(get("/employee/69")).andExpect(status().isOk());
	}
	@Test
	void testDeleteEmployee() throws Exception {
		this.mockMvc.perform(delete("/employee/70")).andExpect(status().isNoContent());
	}
}
