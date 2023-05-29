import { useRecoilState } from "recoil";
import { AnimatePresence, useScroll } from "framer-motion";
import ProgressBar from "./ProgressBar";
import { rightSidebar } from "../../atoms/rightSidebar";
import Right from "./Right";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  // useScroll is used to create scroll-linked animations, like progress indicators and parallax effects.
  const { scrollYProgress } = useScroll();

  const [openSidebar] = useRecoilState(rightSidebar);

  return (
    <main className="scrollbar-thin overflow-x-hidden">
      <AnimatePresence
        initial={false}
        // Only render one component at a time.
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        <ProgressBar progress={scrollYProgress} />
        <div className="bg-primary p-4">
          <div className="px-2 pt-2"></div>
          {children}
          <div className={`hidden lg:block ${openSidebar ? "md:block" : ""}`}>
            <Right />
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Layout;
