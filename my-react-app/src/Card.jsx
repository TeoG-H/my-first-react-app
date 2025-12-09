import profilePic from './assets/profile.png'

function Card(props){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2 className='car-title'>{props.name}</h2>
            <p>I am a student and I learn react </p>
        </div>
    );
}

export default Card