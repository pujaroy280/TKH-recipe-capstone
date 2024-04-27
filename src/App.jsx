import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
  return (
    <Container maxidth='lg'>
      <AppBar position='static' color='inherit'>
          <Typography variant='h2' align='center'>Recipe App</Typography>
      </AppBar>
      <Grow in>
        <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
                <Grid item xs={12} sm={7}>
                    <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form/>
                </Grid>
            </Grid>
        </Container>
      </Grow>
      </Container>
  )
}
export default App