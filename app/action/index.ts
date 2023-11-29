'use server';

export const getComments = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/comment`);
  const comments = await res.json();
  return comments;
};
