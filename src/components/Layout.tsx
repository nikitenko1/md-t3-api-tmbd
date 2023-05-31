import { useRecoilState } from "recoil";
import { AnimatePresence, useScroll } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { rightSidebar } from "../../atoms/rightSidebar";
import Navbar from "./Navbar";
import Right from "./Right";
import Sidebar from "./Sidebar";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  // useScroll is used to create scroll-linked animations, like progress indicators and parallax effects.
  const { scrollYProgress } = useScroll();

  const [openSidebar] = useRecoilState(rightSidebar);

  return (
    <main className="scrollbar-thin overflow-x-hidden bg-[#1A161F]">
      <AnimatePresence
        initial={false}
        // Only render one component at a time.
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        <ProgressBar progress={scrollYProgress} />

        <Sidebar />
        <Navbar />
        <div className={`md:hidden" ${openSidebar ? "lg:block" : ""}`}>
          {children}
          <Right />
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Layout;
