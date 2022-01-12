import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { createContext, useState } from 'react';
export const CartContext = createContext();
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  return (
    <Layout>
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
      </CartContext.Provider>
    </Layout>
  );
}

export default MyApp;
