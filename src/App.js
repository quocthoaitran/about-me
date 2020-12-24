
import { Layout } from 'antd'
import Header from './components/header/HeaderComponent'
import Home from './components/home/Home';

import './app.css'
import About from './components/about/About';
import Education from './components/education/Education';
import Experiences from './components/experiences/Experiences';
import Contact from './components/contact/Contact';
import FooterComponent from './components/footer/FooterComponent';

const { Content, Footer } = Layout;

function App() {
  return (
    <>
    <div className="App">
      <Layout>
        <Header></Header>
        <Content className="app-content" id="scroll-layout">
          <Home></Home>
          <About></About>
          <Education></Education>
          <Experiences></Experiences>
          <Contact></Contact>
        </Content>
        <Footer style={{ textAlign: 'center' }}><FooterComponent></FooterComponent></Footer>
      </Layout>
    </div>
    </>
  );
}

export default App;
