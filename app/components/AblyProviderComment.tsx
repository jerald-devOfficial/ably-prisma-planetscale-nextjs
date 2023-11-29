'use client';
import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import Comments from './Comments';
import { Comment } from '@prisma/client';

const client = new Ably.Realtime.Promise({
  authUrl: `${process.env.NEXT_PUBLIC_HOSTNAME}/api/token`,
  authMethod: 'POST'
});

type Props = {
  initialComments: Comment[];
};

const AblyProviderComment = ({ initialComments }: Props) => {
  return (
    <AblyProvider client={client}>
      <Comments initialComments={initialComments} />
    </AblyProvider>
  );
};

export default AblyProviderComment;
