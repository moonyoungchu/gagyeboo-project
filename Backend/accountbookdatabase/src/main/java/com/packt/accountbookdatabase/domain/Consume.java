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
    private long am_consume;

    @OneToOne
    @JoinColumn(name = "tag_id")
    private Tag tag_id;

    public Tag getTag_id() {
        return tag_id;
    }

    public void setTag_id(Tag tag_id) {
        this.tag_id = tag_id;
    }


    public Consume() {}

    public Consume(long am_consume, String consume_ym, String consume_day, Tag tag_id){
        super();
        this.am_consume = am_consume;
        this.consume_ym = consume_ym;
        this.consume_day = consume_day;
        this.tag_id = tag_id;
    }

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

    public long getAm_consume() {
        return am_consume;
    }

    public void setAm_consume(long am_consume) {
        this.am_consume = am_consume;
    }

}
