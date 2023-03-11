import './App.css';

function App() {
  return (
    <div className="App">
      <div className="headerMainDiv">
        <a href='/' className='headerTitle'>Antitech</a>
      </div>
      <div className='callingCardMainDiv'>
        <div className='callingCardDiv'>
          <div>
            <img className='callingCardImage' src="https://huutokauppstorage.blob.core.windows.net/antitech/Edustava_kuva_Cv.jpg"/>
          </div>
          <div>
            <h1>Eemeli Antikainen</h1>
            <p>CEO of Antitech</p>
            <p>+358409606973</p>
            <p>antitechofficial@gmail.com</p>
          </div>
        </div>
        <div>
          <p>AntiTech makes custom websites for clients. <br/>If your intrested in my projects or want AntiTech to make your dream website, be in contact!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
