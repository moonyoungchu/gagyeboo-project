package com.packt.accountbookdatabase.controller;

import com.packt.accountbookdatabase.domain.BudgetRepository;
import com.packt.accountbookdatabase.domain.Budget;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BudgetController {
    @Autowired
    private BudgetRepository budgetRepository;

    @RequestMapping("/budget")
    public Iterable<Budget> getBudget() {
        return budgetRepository.findAll();
    }
}
