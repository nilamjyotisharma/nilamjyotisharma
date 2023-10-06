import Head from 'next/head'
import Navbar from './NavBar'


const BaseLayout = ({title, children }) => {
    return (
        <>
            
            <Navbar/>
            <main>
                {children}
            </main>
        </>
    )
}

export default BaseLayout