import GlobalStyle from "./assets/styles/globalStyle";
import Header from './layout/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        {/* Other components will go here */}
      </div>
    </>
  );
}

export default App;
