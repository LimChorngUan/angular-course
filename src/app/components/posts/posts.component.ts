import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  selectedPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  // inject PostService to the constructor
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onAddNewPost(newPost: Post) {
    this.posts.unshift(newPost);
  }

  editPost(post: Post) {
    this.selectedPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(updatedPost: Post) {
    this.posts.forEach((curPost, index) => {
      if (updatedPost.id === curPost.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(updatedPost);
        this.isEdit = false;
        this.selectedPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    });
  }

  deletePost(post: Post) {
    if (confirm('Are you sure?')) {
      this.postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach((curPost, index) => {
          if (curPost.id === post.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
