import './Title.css'
import PropTypes from 'prop-types'
const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}
Title.propTypes = {
  subTitle: PropTypes.string.isRequired, // subTitle doit être une chaîne et est requis
  title: PropTypes.string.isRequired,     // title doit être une chaîne et est requis
};

export default Title
