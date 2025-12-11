import { useState } from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import InputText from "./InputText.jsx";
import ListOfProducts from "./ListOfProducts.jsx";
import ToDoList from "./toDoList/ToDoList.jsx";
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
       <div className="info-layout">
          <InputText/>
          <ListOfProducts/>
      </div>
      <ToDoList/>
      <Footer/>
    </>
  );

}

export default App
