package com.benleadbeater.database.hello.mySpringDatabaseBootApp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benleadbeater.database.hello.mySpringDatabaseBootApp.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order , Long>{
	Page<Order> findByPersonId(Long personId, Pageable pageable);
}

