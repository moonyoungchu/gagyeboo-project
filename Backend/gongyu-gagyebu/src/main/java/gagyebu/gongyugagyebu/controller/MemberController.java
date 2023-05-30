package gagyebu.gongyugagyebu.controller;


import gagyebu.gongyugagyebu.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    // 다른 여러 컨트롤러에서 가져다가 사용 가능


}
