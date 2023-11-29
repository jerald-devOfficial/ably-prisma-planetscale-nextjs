'use client';

import { Fragment, useState } from 'react';

import Typography from '@mui/material/Typography';

import CommentsList from './CommentsList';
import AddCommentSection from './AddCommentSection';
import { useChannel } from 'ably/react';
import { Comment } from '@prisma/client';

type Props = {
  initialComments: Comment[];
};

const Comments = ({ initialComments }: Props) => {
  const [comments, setComments] = useState(initialComments);

  const { channel } = useChannel('comment-channel', (message) => {
    // Add new incoming comment to the list of comments
    setComments((comments) => [...comments, message.data]);
  });

  const submitComment = async (username: string, comment: string) => {
    try {
      const body = { username, comment };
      await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      channel.publish({
        name: 'comment',
        data: {
          username,
          comment
        }
      });
    } catch (error) {
      console.error('An error occurred when creating a comment: ', error);
    }
  };

  return (
    <Fragment>
      <Typography variant='h6' gutterBottom>
        Comments ({comments.length})
      </Typography>
      <CommentsList comments={comments} />
      <AddCommentSection submitComment={submitComment} />
    </Fragment>
  );
};

export default Comments;
