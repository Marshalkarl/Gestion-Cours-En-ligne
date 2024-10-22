import './Campus.css'

const Campus = () => {
  return (
    <div className='campus '>
        <div className="galerie">
            <img src="/images/gallery-1.png" alt="" />
            <img src="/images/gallery-2.png" alt="" />
            <img src="/images/gallery-3.png" alt="" />
            <img src="/images/gallery-4.png" alt="" />
        </div>
      <button className='btn dark-btn'>Voir Plus ici <img src="/images/white-arrow.png" alt="" /></button>
    </div>
  )
}

export default Campus

