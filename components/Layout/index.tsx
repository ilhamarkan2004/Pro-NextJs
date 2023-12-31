import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>Next Js | {pageTitle}</title>
        <meta name="description" content="Ini lagi belajar Next JS" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
