package com.packt.accountbookdatabase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class AccountbookdatabaseApplication implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(AccountbookdatabaseApplication.class);

	public static void main(String[] args) {

		SpringApplication.run(AccountbookdatabaseApplication.class, args);
		logger.info("Aplication started");
	}

	@Override
	public void run(String...args) throws Exception{

	}

}
