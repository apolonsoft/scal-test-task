import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
const Posts = lazy(() => import('./pages/Posts'))
const Post = lazy(() => import('./pages/Post'))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/post" component={Post} />

              <Route path="/posts" component={Posts} />

            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}


export default App;
