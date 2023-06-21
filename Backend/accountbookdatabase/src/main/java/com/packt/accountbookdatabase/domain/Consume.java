package com.packt.accountbookdatabase.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Consume {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long consume_id;
    private String consume_ym;
    private String consume_day;
    private int am_consume;


    public Consume() {}

    public Consume(int am_consume, String consume_ym, String consume_day){
        super();
        this.am_consume = am_consume;
        this.consume_ym = consume_ym;
        this.consume_day = consume_day;
    }

//    @JsonIgnore
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "consume")
//    private List<Bank> banks;
//
//    public List<Bank> getBanks() {
//        return banks;
//    }
//
//    public void setBanks(List<Bank> banks) {
//        this.banks = banks;
//    }

    public long getConsume_id() {
        return consume_id;
    }

    public void setConsume_id(long consume_id) {
        this.consume_id = consume_id;
    }

    public String getConsume_ym() {
        return consume_ym;
    }

    public void setConsume_ym(String consume_ym) {
        this.consume_ym = consume_ym;
    }

    public String getConsume_day() {
        return consume_day;
    }

    public void setConsume_day(String Consume_day) {
        this.consume_day = consume_day;
    }

    public int getAm_consume() {
        return am_consume;
    }

    public void setAm_consume(int am_consume) {
        this.am_consume = am_consume;
    }

}