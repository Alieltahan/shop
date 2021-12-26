import { createGlobalStyle } from 'styled-components';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/layout/Main';
import confStore from './components/store/confStore';
import { Provider } from 'react-redux';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.REACT_APP_BACKEND_URL}` || 'http://localhost:4000/',
});

const GlobalStyles = createGlobalStyle`
:root{
  --c-text: #1D1F22;
  --c-white: #FFFFFF;
  --c-primary: #5ECE7B;
  --c-black: #1D1F22;
  --c-info-variant: #B4D2F4;
  --price-regular-font: Raleway;
  --product-card-box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  /* given Shadow box effect  */
  /* --product-card-box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19); */
  --button-box-shadow: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
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
a:visited{
  color: var(--c-text);
}
.active{
    color: var(--c-primary);
    border-bottom: 2px solid var(--c-primary);
  }
  .EUR:before {
    content: '\u20AC';
  }
  .USD:before {
    content: '\u0024';
  }
  .GBP:before {
    content: '£';
  }
  .RUB:before {
    content: '₽';
  }
  .JPY:before {
    content: '¥';
  }
  /* For Scability, Just add className with Currency Symbol & Add It To The CONST Symbol */
  .AUD:before {
    content: 'A$';
  }
  .selected{
    background-color: #000;
    color: white;
    &-mini{
      background-color: #fff;
      opacity: 0.5;
      color: #000;
    }
  }
`;

function App() {
  const store = confStore();
  store.subscribe(() =>
    setTimeout(
      () => localStorage.setItem('ecom', JSON.stringify(store.getState())),
      800
    )
  );
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <GlobalStyles />
          <Main />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
