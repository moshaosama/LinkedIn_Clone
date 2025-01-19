package com.example.Linkedin_Clone.Post;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity
public class Post {
    @Id
    @GeneratedValue
    private Integer id;
    @NotEmpty
    @NotNull
    private String Title;
    private String Comment;
    private Integer Likes = 0;

    Post(String Title, Integer Likes, String Comment) {
        this.Title = Title;
        this.Likes = Likes;
        this.Comment = Comment;
    }

    Post() {
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return this.Title;
    }

    public void setTitle(String Title) {
        this.Title = Title;
    }

    public String getComment() {
        return this.Comment;
    }

    public void setComment(String Comment) {
        this.Comment = Comment;
    }

    public Integer getLikes() {
        return this.Likes;
    }

    public void setTitle(Integer Likes) {
        this.Likes = Likes;
    }
}