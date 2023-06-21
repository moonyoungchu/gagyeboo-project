package gagyebu.gongyugagyebu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@Controller
public class MainController {
//    @GetMapping("hello-api")
//    @ResponseBody
//    public HelloController.Hello helloApi(@RequestParam("name") String name){
//        HelloController.Hello hello = new HelloController.Hello();
//        hello.setName(name);
//        return hello;
//    }
//
//    static class Hello{
//        private String name;
//        // 자바 빈 규약 (getter / setter)
//        // property 접근방식
//        public String getName() {
//            return name;
//        }
//        public void setName(String name) {
//            this.name = name;
//        }
//    }

    @GetMapping("Budget")
    @ResponseBody
    public Consume ConsumeApi(@RequestParam("consumeDate") String consumeDate){
        Consume con = new Consume();
        con.setConsume(consumeDate);
        return con;
    }
    static class Consume{
        private String consumeDate;

        private final int budget = 10000;
        private final int consume = 3000;
        private final int balanced = budget - consume;
        HashMap<String, Integer> map = new HashMap<>();

        public void setConsume(String consumeDate){
            map.put("budget", budget);
            map.put("consume", consume);
            map.put("balanced", balanced);
        }

        public HashMap<String, Integer> getMap() {
            System.out.println(map);
            return map;
        }
    }

}
