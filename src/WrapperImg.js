import lvl_1 from './img/lvl4.jpg';
import lvl1 from './img/lvl1.jpg';
import lvl2 from './img/lvl2.jpg';
import lvl3 from './img/lvl3.jpg';
import lastlvl from './img/lastlvl.jpg';


const WrapperImg = ({num}) => {
  return (
    <div className="wrapper-img">
    <div>
      {
        num == -1
        ? <img src={lvl_1} alt="" />
        : num < 5
        ? <img src={lvl1} alt="" />
        : num < 10
        ? <img src={lvl2} alt="" />
        : num < 15
        ? <img src={lvl3} alt="" />
        : <img src={lastlvl} alt="" />
      }
    </div>
    </div>
  )
}

export default WrapperImg