package com.packt.accountbookdatabase.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Budget {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long budget_id;
    private String budget_ym;
    private long am_budget;


    public Budget(){}
    public Budget(String budget_ym, long am_budget) {
        super();
        this.budget_ym = budget_ym;
        this.am_budget = am_budget;
    }

    public long getAm_budget() {
        return am_budget;
    }

    public void setAm_budget(long am_budget) {
        this.am_budget = am_budget;
    }

    public String getBudget_ym() {
        return budget_ym;
    }

    public void setBudget_ym(String budget_ym) {
        this.budget_ym = budget_ym;
    }


    public long getBudget_id() {
        return budget_id;
    }

    public void setBudget_id(long budget_id) {
        this.budget_id = budget_id;
    }

}
