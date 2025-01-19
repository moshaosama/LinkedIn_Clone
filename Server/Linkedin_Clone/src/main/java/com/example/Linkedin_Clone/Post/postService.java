package com.example.Linkedin_Clone.Post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class postService {
    private final postRepository postRepository;

    @Autowired
    postService(postRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post createPost(Post post) {
        return this.postRepository.save(post);
    }

    public List<Post> getPosts() {
        return this.postRepository.findAll();
    }
}