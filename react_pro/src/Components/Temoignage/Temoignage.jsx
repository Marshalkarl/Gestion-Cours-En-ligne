import  {useRef} from 'react'
import './Temoignage.css'

const Temoignage = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () =>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='temoignage'>
        <img src="4-next-icon.png" alt="" className='next-btn' onClick={slideForward}/>
        <img src="/images/back-icon.png" alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src="/images/user-1.png" alt="" className='user-pic'/>
                    <div>
                      <h3>John Doe 1</h3>
                      <span>Ecole, TOGO</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repellendus voluptates nihil iusto enim eligendi beatae, accusantium rem voluptatum ipsum ullam expedita. Delectus quidem molestias quos voluptas, laudantium reiciendis unde!</p> 
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src="/images/user-2.png" alt="" className='user-pic'/>
                    <div>
                      <h3>John Doe 2</h3>
                      <span>Ecole, TOGO</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repellendus voluptates nihil iusto enim eligendi beatae, accusantium rem voluptatum ipsum ullam expedita. Delectus quidem molestias quos voluptas, laudantium reiciendis unde!</p> 
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src="/images/user-3.png" alt="" className='user-pic'/>
                    <div>
                      <h3>John Doe 3</h3>
                      <span>Ecole, TOGO</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repellendus voluptates nihil iusto enim eligendi beatae, accusantium rem voluptatum ipsum ullam expedita. Delectus quidem molestias quos voluptas, laudantium reiciendis unde!</p> 
                </div>
              </li>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src="/images/user-4.png" alt="" className='user-pic'/>
                    <div>
                      <h3>John Doe 4</h3>
                      <span>Ecole, TOGO</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repellendus voluptates nihil iusto enim eligendi beatae, accusantium rem voluptatum ipsum ullam expedita. Delectus quidem molestias quos voluptas, laudantium reiciendis unde!</p> 
                </div>
              </li>
              
            </ul>
        </div>
    </div>
  )
}

export default Temoignage
