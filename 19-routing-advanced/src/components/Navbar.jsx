// Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-8 px-4 bg-cyan-900 justify-between'>
            <h2 className='text-xl font-bold'>Sheriyans</h2>
            <div className='flex gap-10'>
                <Link to="/" className="text-xl font-medium">Home</Link>
                <Link to="/about" className="text-xl font-medium">About</Link>
                <Link to="/product" className="text-xl font-medium">Product</Link>
            </div>
        </div>
    )
}

export default Navbar