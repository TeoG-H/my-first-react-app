import style from './Button.module.css'


function Button({ onShowCard })
{
    
    const handleClick = () => {
        onShowCard();
        
    };

    const handleClick2 = (e) => {
            e.target.textContent ="hopa"
    };


return(
    <>
    <button className={style.button} onClick={()=>handleClick()}>click one time</button>

    <button className={style.button} onDoubleClick={(e)=>handleClick2(e)}>click two time</button>
    </>
)
}
export default Button