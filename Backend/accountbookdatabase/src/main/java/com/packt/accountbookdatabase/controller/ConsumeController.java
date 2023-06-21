package com.packt.accountbookdatabase.controller;

import com.packt.accountbookdatabase.domain.Consume;
import com.packt.accountbookdatabase.domain.ConsumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConsumeController {
    @Autowired
    private ConsumeRepository consumeRepository;

    @RequestMapping("/consume")
    public Iterable<Consume> getConsume() {
        return consumeRepository.findAll();
    }

}
