package com.packt.accountbookdatabase;

import com.packt.accountbookdatabase.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;


@SpringBootApplication
public class AccountbookdatabaseApplication implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(AccountbookdatabaseApplication.class);

	@Autowired
	private BudgetRepository budgetRepository;

	@Autowired
	private ConsumeRepository consumeRepository;

	@Autowired
	private TagRepository tagRepository;

	@Override
	public void run(String...args) throws Exception{

		Budget budget1 = new Budget("202306", 1000000);
		Budget budget2 = new Budget("202307", 2000000);
		budgetRepository.saveAll(Arrays.asList(budget1, budget2));

		Tag tag1 = new Tag("202306", "음식");
		Tag tag2 = new Tag("202306", "옷");
		Tag tag3 = new Tag("202306", "영화");
		tagRepository.saveAll(Arrays.asList(tag1, tag2, tag3));


		Consume consume1 = new Consume(2500,"202306","30",tag1);
		Consume consume2 = new Consume(5000,"202306","25",tag2);
		Consume consume3 = new Consume(6000,"202306","01",tag3);
		Consume consume4 = new Consume(7000,"202306","02",tag3);

		consumeRepository.saveAll(Arrays.asList(consume1, consume2, consume3, consume4));
	}

	public static void main(String[] args) {

		SpringApplication.run(AccountbookdatabaseApplication.class, args);
		logger.info("Aplication started");

	}



}
