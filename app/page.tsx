import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import { getComments } from './action';
import dynamic from 'next/dynamic';

const AblyProviderComment = dynamic(
  () => import('./components/AblyProviderComment'),
  {
    ssr: false
  }
);

const Home = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/comment`);
  // const comments = await res.json();
  // console.log('comments:', comments);

  const comments = await getComments();

  console.log('comments: ', comments);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header />
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid
            item
            xs={12}
            sx={{
              py: 3
            }}
          >
            <Content />
            <Divider
              variant='middle'
              sx={{
                my: 3
              }}
            />
            <AblyProviderComment initialComments={comments} />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
