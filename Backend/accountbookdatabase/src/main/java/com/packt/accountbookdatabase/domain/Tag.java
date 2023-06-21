package com.packt.accountbookdatabase.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long tag_id;
    private String tag_ym;
    private String tag_name;

    public Tag(){}
    public Tag(String tag_ym, String tag_name){
        super();
        this.tag_ym = tag_ym;
        this.tag_name = tag_name;
    }

    public String getTag_name() {
        return tag_name;
    }

    public void setTag_name(String tag_name) {
        this.tag_name = tag_name;
    }

    public String getTag_ym() {
        return tag_ym;
    }

    public void setTag_ym(String tag_ym) {
        this.tag_ym = tag_ym;
    }

    public long getTag_id() {
        return tag_id;
    }

    public void setTag_id(long tag_id) {
        this.tag_id = tag_id;
    }
}
