import './header.css'
function header() {
  return (
    <>
      <header className="header">
        <div className='header1'>
          <div className="AppName">
            <span>Trader</span>buddy
          </div>
          <div className="buttons">
            <button className='loginBtn'>login</button>
            <button className='signupBtn'>sign up</button>
          </div>
        </div>
      </header>
    </>
  )
}
export default header