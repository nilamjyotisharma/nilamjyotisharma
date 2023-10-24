
import Navbar from './NavBar'
import Footer from './Footer'



const BaseLayout = ({children }) => {
    return (
        <div>
            
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            
        </div>
    )
}

export default BaseLayout