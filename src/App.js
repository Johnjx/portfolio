import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/preLoader";
import TestPage from "./components/testPage";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
    <AnimatePresence exitBeforeEnter>
    {isLoading && <PreLoader/>}
    </AnimatePresence>
    <TestPage/>
    </>
  );
}

export default App;
