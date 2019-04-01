import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() addNewPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() selectedPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please fill in the form');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(newPost => {
        this.addNewPost.emit(newPost);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.selectedPost).subscribe(updatedPost => {
      console.log(updatedPost);
      this.isEdit = false;
      this.updatedPost.emit(updatedPost);
    })
  }
}
