package gagyebu.gongyugagyebu;

import gagyebu.gongyugagyebu.Repository.JdbcMemberRepository;
import gagyebu.gongyugagyebu.Repository.MemberRepository;
import gagyebu.gongyugagyebu.Repository.MemoryMemberRepository;
import gagyebu.gongyugagyebu.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import javax.xml.crypto.Data;

@Configuration
public class SpringConfig {

    private DataSource dataSource;

    @Autowired
    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public MemberService memberService(){
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository(){
        //return new MemoryMemberRepository();
        return new JdbcMemberRepository(dataSource);
    }
    // 객체지향적 설계

}
