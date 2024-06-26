import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const BlogPost = ({ post, onDelete, onEdit }) => {
  return (
    <Box sx={{ my: 2, p: 2, border: '1px solid', borderColor: 'grey.400', borderRadius: 2 }}>
      <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: post.content }}></Typography>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" color="primary" onClick={onEdit}>
          Edit Post
        </Button>
        <Button variant="outlined" color="secondary" onClick={onDelete}>
          Delete Post
        </Button>
      </Box>
    </Box>
  );
};

export default BlogPost;
