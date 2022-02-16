import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <footer className='fixed-bottom text-center'>
        <div className="row">
            <div className="col home">
                <NavLink to="/" className={({isActive}) =>
                    isActive ? "link-warning home" : 'link-light home'
                   
                }>Home

                </NavLink>

            </div>
            <div className="col contact">
            <NavLink to="/contact" className={({isActive}) => isActive ? "link-warning contact" : "link-light contact"
                    
                   
                }>Contact

                </NavLink>
            </div>
        </div>
    </footer>
  )
}

export default Navbar