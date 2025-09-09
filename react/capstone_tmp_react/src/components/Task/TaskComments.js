import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentService } from '../../services/comments';
// import './TaskComments.css';

const TaskComments = ({ taskId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadComments();
  }, [taskId]);

  const loadComments = async () => {
    try {
      setIsLoading(true);
      const commentsData = await commentService.getComments(taskId);
      setComments(commentsData);
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const commentData = {
        taskId: parseInt(taskId),
        content: newComment,
        authorId: user.id,
      };

      await commentService.createComment(commentData);
      setNewComment('');
      loadComments(); // Reload comments
    } catch (error) {
      console.error('Failed to create comment:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="task-comments">
      <h4>Comments</h4>
      
      <div className="comments-list">
        {isLoading ? (
          <p>Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="no-comments">No comments yet.</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <span className="comment-author">
                  {comment.author?.firstName} {comment.author?.lastName}
                </span>
                <span className="comment-date">
                  {formatDate(comment.createdAt)}
                </span>
              </div>
              <div className="comment-content">
                {comment.content}
              </div>
            </div>
          ))
        )}
      </div>
      
      <form onSubmit={handleSubmitComment} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          rows="3"
        />
        <button 
          type="submit" 
          className="btn-primary"
          disabled={!newComment.trim()}
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default TaskComments;