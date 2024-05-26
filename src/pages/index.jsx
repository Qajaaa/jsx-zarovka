import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Bulb } from './src/components/Bulb/bulb.jsx'
import bulbOn from '../../img/bulb-on.png';
import bulbOff from '../../img/bulb-off.png';


document.querySelector('#root').innerHTML = render(
  <>
  <Bulb power = {false}/>
  <Bulb power = {true}/>
  <Bulb power = {false}/>
  <Bulb power = {true}/>
  
  </>
);
