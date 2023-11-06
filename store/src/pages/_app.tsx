import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../server/utils/api";

import "../styles/globals/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "../components/General/Cart";
import { CartProvider } from "../contexts/CartContext";
import GeneralContainer from "../components/General/GeneralContainer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CartProvider>
      
      <Cart />
      <GeneralContainer>
      <Component {...pageProps} />
      </GeneralContainer>
      
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </CartProvider>
      
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
