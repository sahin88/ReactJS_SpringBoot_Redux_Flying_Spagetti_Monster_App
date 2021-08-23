package com.fsm.restcontroller;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fsm.entites.Post;
import com.fsm.services.PostServices;



@RestController
@RequestMapping("/api/post")
public class postController {
	
	public static String uploadDirectory=System.getProperty("user.dir")+"/src/main/";
	@Autowired 
	PostServices postservice ;
	
	@GetMapping("/index")
	public String index(){
		
		return "forward:/src/main/webapp/public/index.html";	
	}
	
	
	@GetMapping("/search")
	public List<Post> searchPosts(@RequestParam String keyword){
		System.out.println("keyword "+keyword);
		return postservice.searchInPosts(keyword);	
	}
	
	@GetMapping("/{pageNr}/{pageSize}/{sortCol}/{sortDir}")
	public List<Post> getPaginatedPosts(@PathVariable int pageNr,@PathVariable int pageSize,@PathVariable String sortCol,@PathVariable String sortDir){
		return postservice.findPaginatedPost(pageNr, pageSize,sortCol, sortDir);	
	}
	
	@PostMapping("")
	public Post savePost(@ModelAttribute Post post,@RequestParam("File") MultipartFile file) throws IOException {
		//**Get the file name
		String fileName= StringUtils.cleanPath(file.getOriginalFilename());
		//Convert String  to Path
		Path uploadPath=Paths.get(uploadDirectory);
		//**Django join method 
		Path filePath=uploadPath.resolve(fileName);
		
		//**Converting file as Stream
		InputStream inputstream =file.getInputStream();
		Files.copy(inputstream,filePath, StandardCopyOption.REPLACE_EXISTING);
		System.out.println("uploadPath"+uploadPath);
		
		
		
		
		return null;
		
	}
	
	

}
