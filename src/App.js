/* eslint-disable react/react-in-jsx-scope */
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import store, { persistor } from './store';
import { CartProvider } from './services/CartContext';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HistoryRouter history={history}>
          <CartProvider>
            <Header />
            <Routes />
            <Footer />
            <GlobalStyles />
            <ToastContainer autoClose={3000} className="teast-container" />
          </CartProvider>
        </HistoryRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
