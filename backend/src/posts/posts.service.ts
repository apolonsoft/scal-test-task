import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { posts } from './data/posts.data';
import { Post } from './interfacse/post.interface';

@Injectable()
export class PostsService {
  private readonly _posts: Post[];

  constructor() {
    this._posts = posts;
  }

  findPosts(): Post[] {
    return this._posts;
  }

  findPost(id: number): Post {
    return this._posts.find((p) => p.id === id && p.title && p.body);
  }
}
