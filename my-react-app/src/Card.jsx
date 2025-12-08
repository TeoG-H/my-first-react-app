import profilePic from './assets/profile.png'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Teodor</h2>
            <p>I am a student and i learn react and vite</p>
        </div>
    );

}

export default Card