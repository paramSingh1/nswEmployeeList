//package com.example.employeelist;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import java.util.List;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Disabled;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.test.context.junit.jupiter.SpringExtension;
//
//import com.example.employeelist.Employee.Employee;
//import com.example.employeelist.Employee.EmployeeDTO;
//import com.example.employeelist.Employee.EmployeeService;
//
//@ExtendWith(SpringExtension.class)
//@DataJpaTest
//@ComponentScan("com.example.employeelist")
//public class EmployeeServiceTests {
//    
//	@Autowired
//    private EmployeeService employeeService;
//    
//    private EmployeeDTO emp1;
//
//    @BeforeEach
//    public void setUp() {
//        emp1 = new EmployeeDTO();
//        emp1.setFirstName("John");
//        emp1.setMiddleName("howard");
//        emp1.setLastName("Smith");
//        emp1.setEmail("johns@example.com");
//        emp1.setMobileNumber("0412345678");
//        emp1.setResAddress("1 Main St");
//        emp1.setContractType("Full-Time");
//        emp1.setStartDate("2020-01-01");
//        emp1.setEndDate("2026-01-01");
//        emp1.setOngoing(false);
//        emp1.setTimeBasis("Full-Time");
//        emp1.setWeeklyHours(38);
//    }
//
//    @Test
//    public void addEmployeeTest() {
//        Employee employee = employeeService.addEmployee(emp1);
//
//        List<Employee> employees = employeeService.getAll();
//        assertThat(employees).hasSize(1);
//
//        Employee addedEmployee = employees.get(0);
//        assertThat(addedEmployee.getId()).isNotNull();
//        assertThat(addedEmployee.getFirstName()).isEqualTo("John");
//        assertThat(addedEmployee.getMiddleName()).isEqualTo("howard");
//        assertThat(addedEmployee.getLastName()).isEqualTo("Smith");
//        assertThat(addedEmployee.getEmail()).isEqualTo("johns@example.com");
//        assertThat(addedEmployee.getMobileNumber()).isEqualTo("0412345678");
//        assertThat(addedEmployee.getResAddress()).isEqualTo("1 Main St");
//        assertThat(addedEmployee.getContractType()).isEqualTo("Full-Time");
//        assertThat(addedEmployee.getStartDate()).isEqualTo("2020-01-01");
//        assertThat(addedEmployee.getEndDate()).isEqualTo("2026-01-01");
//        assertThat(addedEmployee.getTimeBasis()).isEqualTo("Full-Time");
//        assertThat(addedEmployee.getWeeklyHours()).isEqualTo(38);
//    }
//}
