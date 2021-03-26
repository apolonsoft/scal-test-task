import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Post } from './interfacse/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly _postsService: PostsService) {

    }

    @Get()
    findAll(): Post[] {
        return this._postsService.findPosts()
    }

    @Get(':id')
    findOne(@Param() params): Post {
        const {id} = params
        const post = this._postsService.findPost(parseInt(id)) 
        if(post){
            return post
        }
        throw new NotFoundException()
    }
}