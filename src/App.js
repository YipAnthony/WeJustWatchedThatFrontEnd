import Navbar from './components/Navbar'
import SwipeArea from './components/SwipeArea'
import FooterButtons from './components/FooterButtons'

function App() {
  return (
    <div className="flex flex-col justify-start h-screen relative bg-black">
      <Navbar />
      <SwipeArea />
      <FooterButtons />
    </div>
  );
}

export default App;
