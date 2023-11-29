import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CommentDetail from './CommentDetail';
import { Comment } from '@prisma/client';

type Props = {
  comments: Comment[];
};

const CommentsList = ({ comments }: Props) => {
  if (comments.length === 0) {
    return (
      <Grid sx={{ py: 2 }}>
        <Typography variant='body1' sx={{ textAlign: 'center' }}>
          No comments at the moment
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid sx={{ py: 2 }}>
      {comments.map((comment: Comment, index: number) => {
        return <CommentDetail key={`comment-${index}`} comment={comment} />;
      })}
    </Grid>
  );
};

export default CommentsList;
