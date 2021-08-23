package com.fsm.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.fsm.entites.Post;
import com.fsm.repositories.PostRepository;


@Service
public class PostServices {
	
	@Autowired 
	PostRepository postRepo; 
	
	public List<Post> findPaginatedPost( int pageNo, int pageSize, String sortColumn, String sortDir){
		
		Sort sorted= Sort.by(sortColumn);
		sorted=sortDir.equals("asc")?sorted.ascending():sorted.descending();
		
		Pageable paging= PageRequest.of(pageNo, pageSize, sorted);
		Page<Post> pagedResult=postRepo.findAll(paging);
		
		System.out.println("pagedResult"+pagedResult);
		return new ArrayList<Post>();
		
	}
	
	public List<Post> searchInPosts(String keyword){			
		
		return postRepo.searchByKeyword(keyword);
	}
	
	
	Post createPost(String title,String content, String fileName ) {
		
		return null;
	}

}