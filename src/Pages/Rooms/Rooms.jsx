
import Room from '../../components/Room/Room.jsx';
import './Rooms.scss';

const Rooms = () => {
    return(
        <div className='rooms-container '>
            <h1>Rooms page</h1>
            <div className='rooms'>
                <Room roomNum = {1}/>
                <Room roomNum = {2}/>
                <Room roomNum = {3}/>
                <Room roomNum = {4}/>
                <Room roomNum = {5}/>
            </div>
        </div>
        
    )
}
export default Rooms;