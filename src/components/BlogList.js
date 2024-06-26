import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, setPostToEdit } from '../redux/blogSlice';
import BlogPost from './BlogPost';

const BlogList = () => {
  const posts = useSelector(state => state.blogs.posts);
  const dispatch = useDispatch();

  return (
    <div>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          post={post}
          onDelete={() => dispatch(deletePost(post.id))}
          onEdit={() => dispatch(setPostToEdit(post.id))}
        />
      ))}
    </div>
  );
};

export default BlogList;
