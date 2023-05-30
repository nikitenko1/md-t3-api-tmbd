import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { trpc } from "../utils/trpc";
import { RecoilRoot } from "recoil";
import AuthWrapper from "../components/AuthWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const variants = {
    hidden: { opacity: 0, x: 1000 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 1000 },
  };
  const router = useRouter();

  return (
    <>
      <SessionProvider session={session}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <Toaster position="top-center" reverseOrder={false} />
        <RecoilRoot>
          <AuthWrapper>
            <Layout>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  transition={{
                    type: "spring",
                  }}
                  key={router.route}
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            </Layout>
          </AuthWrapper>
        </RecoilRoot>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
