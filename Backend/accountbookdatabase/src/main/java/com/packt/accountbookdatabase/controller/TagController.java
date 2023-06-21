package com.packt.accountbookdatabase.controller;


import com.packt.accountbookdatabase.domain.Tag;
import com.packt.accountbookdatabase.domain.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TagController {
    @Autowired
    private TagRepository tagRepository;


    @RequestMapping("/tag")
    public Iterable<Tag> getTag() {
        return tagRepository.findAll();
    }

}
