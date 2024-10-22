import './Programs.css'

const Programs = () => {
  return (
    <div className="programs" id="">
      <div className="program">
        <img src="/images/program-1.png" alt="" />
          <div className="caption">
            <img src="/images/program-icon-1.png" alt="" />
              <p>Diplôme de fin d études</p>
          </div>
      </div>
      <div className="program">
        <img src="/images/program-2.png" alt="" />
          <div className="caption">
            <img src="/images/program-icon-2.png" alt="" />
              <p>Diplôme de master</p>
          </div>
      </div>
      <div className="program">
        <img src="/images/program-3.png" alt="" />
          <div className="caption">
            <img src="/images/program-icon-3.png" alt="" />
              <p>Après l obtention du diplôme</p>
        </div>
      </div>
    </div>
  )
}

export default Programs

