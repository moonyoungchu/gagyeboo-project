package com.packt.accountbookdatabase.domain;

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


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag")
    private Tag tag;

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }

    public Consume() {}

    public Consume(long am_consume, String consume_ym, String consume_day, Tag tag){
        super();
        this.am_consume = am_consume;
        this.consume_ym = consume_ym;
        this.consume_day = consume_day;
        this.tag = tag;
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

    public void setConsume_day(String consume_day) {
        this.consume_day = consume_day;
    }
    public long getAm_consume() {
        return am_consume;
    }

    public void setAm_consume(long am_consume) {
        this.am_consume = am_consume;
    }

}
