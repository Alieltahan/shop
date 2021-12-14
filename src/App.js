import { createGlobalStyle } from 'styled-components';
import './App.css';
import Container from './components/layout/Container';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.REACT_APP_BACKEND_URL}`,
});

const GlobalStyles = createGlobalStyle`
:root{
  --c-white: #FFFFFF;
  --c-primary: #5ECE7B;
}
 *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  //defines the rem! 1 rem = 10 px
  font-size: 62.5%;
  scroll-behavior: smooth;
  transition: all 0.3s;
}

body {
  transition: inherit;
  scroll-behavior: inherit;
  box-sizing: border-box;
}

::selection {
  background-color: #04066b;
  color: white;
}

a,
a:link:active:hover {
  text-decoration: none;
}

img {
  width: 100%;
}

// Typography
body {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1.1;
}
h1 {
  font-size: 6rem;
}
h2 {
  font-size: 5rem;
}
h3 {
  font-size: 4rem;
}
h4 {
  font-size: 3rem;
}
.active{
    text-color: var(--c-primary);
    border-bottom: 2px solid var(--c-primary);
  }
}`;

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <Container />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
