import React from 'react'
import Footerprogress from '../FooterProgressbar/Footerprogress'
import Header from '../Header/Header/Header'
import Map from '../Map/Map'
import Progressbar from '../ProgressBar/Progressbar'
import Sidenav from '../SideNav/Sidenav'
import './Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <div className="mainpage">
                    <Sidenav />
                    <div className="probar">
                        <Progressbar name="Active users" value="123456" percent="75" color="#023AFF" />
                        <Progressbar name="New users" value="123456" percent="67" color="#00B929" />
                    </div>
                </div>
                <div className="mainpagetwo">
                    <Map />
                </div>
            </div>

            {/* <div className="footer">
                <Footerprogress />
            </div> */}
        </>
    )
}

export default Home