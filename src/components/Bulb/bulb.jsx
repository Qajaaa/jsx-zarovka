import './style.css';
import bulbOn from '../../img/bulb-on.png';
import bulbOff from '../../img/bulb-off.png';


export const Bulb = (power) => {
    const bulbClass = power ? 'bulb bulb--on' : 'bulb';
    return (
        <div className={bulbClass}></div>
    );
};