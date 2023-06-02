package gagyebu.gongyugagyebu.controller;

import gagyebu.gongyugagyebu.domain.Member;
import gagyebu.gongyugagyebu.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class TagController {
    private final MemberService memberService;

    @Autowired
    public TagController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/tags/new")
    public String createForm(){
        return "tags/createTagForm";
    }

    @PostMapping("/tags/new")
    public String create(TagForm form){
        Member tag = new Member();
        tag.setName(form.getTag());
        memberService.join(tag);

        return "redirect:/";
    }

    @GetMapping("/tags")
    public String list(Model model){
        List<Member> tags = memberService.findMembers();
        model.addAttribute("tags", tags);
        return "tags/tagList";
    }
}

