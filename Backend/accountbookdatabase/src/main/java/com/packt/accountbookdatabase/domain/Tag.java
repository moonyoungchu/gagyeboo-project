package com.packt.accountbookdatabase.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long tag_id;
    private String tag_ym;
    private String tag_name;


    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "tag")
    private List<Consume> consumes;

    public List<Consume> getConsumes() {
        return consumes;
    }

    public void setConsumes(List<Consume> consumes) {
        this.consumes = consumes;
    }
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
