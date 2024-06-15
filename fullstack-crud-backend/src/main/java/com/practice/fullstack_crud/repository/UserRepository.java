package com.practice.fullstack_crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practice.fullstack_crud.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

}
