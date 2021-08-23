package com.fsm.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Column(name="TITLE", columnDefinition="VARCHAR=60")
	private String title;
	
	@NotNull
	@Column(name="POST_CONTENT", columnDefinition="TEXT")
	private String content;
	
	
	@Column(name="CREATED_ON")
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private String created_on;
	
	private String post_image;
	
	
	public Post(){
		
	}
	
	public Post(Long id, String title, String content, String created_on, String post_image) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.created_on = created_on;
		this.post_image = post_image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getCreated_on() {
		return created_on;
	}

	public void setCreated_on(String created_on) {
		this.created_on = created_on;
	}

	public String getPost_image() {
		return post_image;
	}

	public void setPost_image(String post_image) {
		this.post_image = post_image;
	}
	
	
	

}