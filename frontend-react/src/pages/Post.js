import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import PostCard from '../components/PostCard'
import { useLocation, useHistory } from "react-router-dom";

export default function Details() {
    const location = useLocation();
    const history = useHistory();
    const [post, setPost] = useState(null);

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    useEffect(() => {
        const { post: currentPost } = location;
        if (!currentPost) {
            history.push('/');
            return;
        }
        const { title, body } = currentPost;
        setPost({ title, body });
    }, [location]);


    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {post &&
                    <PostCard post={post} />
                }
            </Masonry>
        </Container>
    )
}