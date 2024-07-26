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
import { DefaultSeo } from 'next-seo';
import Head from "next/head";
import Script from "next/script";
import {GoogleTagManager} from "@next/third-parties/google"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="icon" href="/ICON.jpg" />
      </Head>
      <GoogleTagManager
        gtmId="GTM-5794H7FM"
      />
      
      <DefaultSeo
      title="Bairhradiateur"
      description="Entreprise renommée avec une expérience de 10 ans dans le domaine de vente et réparation des radiateurs pour automobiles et poids lourds."
      openGraph={{
        type: 'website',
        locale: 'fr_MA',
        url: 'https://bairhradiateur.ma/',
        siteName: 'Bairhradiateur',
      }}
    />
    
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
