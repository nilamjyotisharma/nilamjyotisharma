import Head from 'next/head'
import Navbar from './NavBar'
import Footer from './Footer'


const BaseLayout = ({children }) => {
    return (
        <>
            
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout