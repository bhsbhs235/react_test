package com.example.react_test.repository;

import com.example.react_test.domain.Employee;

import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}