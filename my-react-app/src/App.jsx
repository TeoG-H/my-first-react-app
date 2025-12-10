import { useState } from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import InputText from "./InputText.jsx";
function App() {
  const [showCard, setShowCard] = useState(false);

  const handleToggleCard = () => {
    setShowCard(prev => !prev);
  };

  return(
    <>
      <Header/>
      
       {showCard && <Card name="Teodor" />}

      
      <div className="buttons-wrapper">
          <Button onShowCard={handleToggleCard} />
      </div>
      <hr/>
      <InputText/>
      <Footer/>
  
    </>
  );

}

export default App
