import React from 'react'
import TopoCentrasLogo from './Sponsors/PNGS/TC_EU_baltas@72x.png'
import ViperLogo from './Sponsors/PNGS/VIPER.png'
import ZyroLogo from './Sponsors/PNGS/Zyro Logo White.png'
import SurfsharkLogo from './Sponsors/PNGS/SurfsharkLogo.png'
import Tuta from './Sponsors/PNGS/TUTA.png'
import Wolt from './Sponsors/PNGS/WOLT.png'
import Razer from './Sponsors/PNGS/razer.png'
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col  justify-center items-center  ">
            <main className="flex-grow container mx-auto px-4 sm:px-6">
                <img src={TopoCentrasLogo} className="m-auto mt-12" alt="topo centras" />
                {children}
                <div className="flex mb-12">
                    <img src={ViperLogo} className="m-auto mt-12 max-h-10" alt="topo centras" />
                    <img src={SurfsharkLogo} className="m-auto mt-12 max-h-10" alt="topo centras" />
                    <img src={Tuta} className="m-auto mt-12 max-h-10" alt="topo centras" />
                    <img src={ZyroLogo} className="m-auto mt-12 max-h-10" alt="topo centras" />
                    <img src={Wolt} className="m-auto mt-12 max-h-10" alt="topo centras" />
                    <img src={Razer} className="m-auto mt-12 max-h-10" alt="topo centras" />
                </div>

            </main>
        </div>
    )
}

export default Layout
