import React from 'react'
import TCLogo from './PNGS/TC_EU_baltas@72x.png'
import ViperLogo from './PNGS/VIPER.png'
import ZyroLogo from './PNGS/Zyro Logo White.png'
import SurfsharkLogo from './PNGS/SurfsharkLogo.png'
import Tuta from './PNGS/TUTA.png'
import Wolt from './PNGS/WOLT.png'
import Razer from './PNGS/razer.png'
const SponsorsComponent = () => {
    return (
        <div className=" inline-grid justify-center mb-12  break-normal text-white text-xl font-bold font-sans">
            <div className="bg-gray-900 mt-6 pr-4 pl-4 rounded-xl w-auto border-4 border-purple-400">
                <div className="lg:grid lg:grid-rows-2 p-6 lg:grid-cols-3 gap-12 grid-flow-cols text-left mt-6">
                    <div className="flex justify-center items-center mb-6">
                        <img src={ViperLogo} alt="logo" className="cursor-pointer" onClick={() => { window.open("https://viper.patriotmemory.com/", "_blank") }} />
                    </div>
                    <div className="col-span-2  text-justify mb-12">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </div>


                    <div className="flex justify-center items-center mb-6">
                        <img src={Razer} alt="logo" className="cursor-pointer" onClick={() => { window.open("https://www.topocentras.lt/razer", "_blank") }} />
                    </div>
                    <div className="col-span-2 text-justify mb-12">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SponsorsComponent
