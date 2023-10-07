import Head from 'next/head'
import Navbar from './NavBar'
import Footer from './Footer'


const BaseLayout = ({children }) => {
    return (
        <>
            
            <Navbar/>
            <main className='mb-96'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default BaseLayout