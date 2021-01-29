import Header from "./components/header/index"
import Layout from "./components/layout/index"
import Footer from "./components/footer/index"

import bg1 from "./images/bg1.jpg"
import bg2 from "./images/bg2.jpg"

const App = () => {
  return (
    <>
      <Header title="Pokemon Game" desc="Created for learning React" />
      <Layout id="l01" title="JSX" desc="An example of working with JSX" urlBg={bg1}/>
      <Layout id="l02" title="React components" desc="An example of working with React components" colorBg="#e3c60b"/>
      <Layout id="l03" title="CSS" desc="An example of working with CSS" urlBg={bg2}/>
      <Footer />
    </>
  );
}

export default App;
