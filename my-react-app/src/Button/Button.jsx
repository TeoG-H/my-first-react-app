import style from './Button.module.css'
import { useState } from "react";

function Button({ onShowCard })
{
    const [showText, setShowText] = useState(false);
     const handleClick2 = (e) => {
        setShowText(prev => !prev);
    };


    const handleClick = () => {
        onShowCard();
        
    };

return(
    <>
    <button className={style.button} onClick={()=>handleClick()}>click one time</button>

    <button className={style.button} onDoubleClick={(e)=>handleClick2(e)}>{showText ? "hopa" : "click two times"}</button>
    </>
)
}
export default Button