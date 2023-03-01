
import Room from '../../components/Room/Room.jsx';
import './Rooms.scss';

const Rooms = () => {
    return(
        <div className='comp-container'>
            <h1>Rooms page</h1>
            <div className='rooms-container'>
                <Room />
                <Room />
            </div>
        </div>
        
    )
}
export default Rooms;