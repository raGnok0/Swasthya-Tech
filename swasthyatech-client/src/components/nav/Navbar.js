import {Link} from "react-router-dom"

function Navbar(){
    return(
        <>
            <div className="bg-green-200">
                <div>
                    <h1 className="bg-violet-400">Swasthya TECH</h1>
                    <Link to='/hospital_login'>Hospital Login</Link>
                    <Link to='/hospital_registration'>Hospital Registration</Link>
                </div>

                <button>submit</button>
            </div>
        </>
    )
}

export default Navbar;
