
import './room.scss';

const Room = ({ roomNum }) => {
    return(
        <div className='room-container has-transition'>
            <div className="room">
                <h1>Room {roomNum}</h1>
            </div>
        </div>
        
    )
}
export default Room;