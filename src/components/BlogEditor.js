import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost } from '../redux/blogSlice';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box, Button, Typography } from '@mui/material';

const BlogEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editingPostId, setEditingPostId] = useState(null);

  const dispatch = useDispatch();
  const postToEdit = useSelector(state => state.blogs.postToEdit);

  useEffect(() => {
    if (postToEdit) {
      const contentBlock = htmlToDraft(postToEdit.content);
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
      setEditingPostId(postToEdit.id);
    }
  }, [postToEdit]);

  const handleSave = () => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (editingPostId) {
      dispatch(editPost({ id: editingPostId, content }));
      setEditingPostId(null);
    } else {
      const newPost = {
        id: Date.now(),
        content,
      };
      dispatch(addPost(newPost));
    }
    setEditorState(EditorState.createEmpty());
  };

  return (
    <Box sx={{ my: 4, p: 2, border: '1px solid', borderColor: 'grey.400', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        {editingPostId ? 'Edit Blog Post' : 'Create a New Blog Post'}
      </Typography>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbar-class"
      />
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          {editingPostId ? 'Update Post' : 'Save Post'}
        </Button>
      </Box>
    </Box>
  );
};

export default BlogEditor;
