package com.fsm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.fsm.entites.Post;



public interface PostRepository extends PagingAndSortingRepository   <Post , Long> {
	
	@Query("SELECT p FROM Post p WHERE "+"CONCAT( p.id, p.content, p.title)" + "LIKE %?1%")
	List<Post>searchByKeyword(String keyword);

}
