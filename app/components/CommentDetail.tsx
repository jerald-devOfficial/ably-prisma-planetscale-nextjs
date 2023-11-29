import React from 'react';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Comment } from '@prisma/client';

type Props = {
  comment: Comment;
};

const CommentDetail = ({ comment }: Props) => {
  return (
    <React.Fragment>
      <Grid container spacing={2} direction='column' sx={{ py: 2 }}>
        <Grid item>{comment.comment}</Grid>
        <Grid item>
          <Typography variant='body2' component='span'>
            By&nbsp;
          </Typography>
          <Typography variant='body2' component='span' sx={{ fontWeight: 600 }}>
            {comment.username}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

export default CommentDetail;
