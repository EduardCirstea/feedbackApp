import PropTypes from 'prop-types'

function Header({children , bgColor,color}) {

  return (
    <header  style={{backgroundColor:bgColor,color:color} } >
        <div className='container'>
            <h2>
                 {children}
            </h2> 
        </div>
    </header>
    
  )
}

Header.defaultProps = {
    children:"Feedback UI",
    bgColor:"rgba(0,0,0,0.4)",
    color:"#ff6a95"
}

Header.propTypes={
    children:PropTypes.string,
    bgColor: PropTypes.string,
  color: PropTypes.string,
}
export default Header