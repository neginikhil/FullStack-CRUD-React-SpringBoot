package com.practice.fullstack_crud.exception;

public class UserNotFoundException extends RuntimeException{
	public UserNotFoundException(Long id) {
		super("Could not find user by id " + id);
	}
}
