import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <footer className='fixed-bottom text-center'>
        <div className="row">
            <div className="col home">
                <NavLink to="/" className={({isActive}) =>
                    isActive ? "link-warning" : 'link-light'
                   
                }>Home

                </NavLink>

            </div>
            <div className="col">
            <NavLink to="/contact" className={({isActive}) => isActive ? "link-warning" : "link-light"
                    
                   
                }>Contact

                </NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Navbar