import { useState, useEffect } from "react";
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
    {isLoading && <PreLoader/>}
    <TestPage/>
    </>
  );
}

export default App;
