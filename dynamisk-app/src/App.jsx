import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieAPI from './components/MovieAPI'
import { createTheme, colors, ThemeProvider, Container} from '@mui/material';


function App() {

  const theme = createTheme({
    typography: { 
      h2: {
        fontFamily: [
          'Bangers',
          'arial',
        ].join(','),
        fontSize: '5rem'
      },
    },
    palette: {
      primary: {
        main: colors.orange[600]
        },
      }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="App">
          <Header />
          <MovieAPI />
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
