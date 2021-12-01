import React from 'react'
import TCLogo from './PNGS/TC_EU_baltas@72x.png'
import ViperLogo from './PNGS/VIPER.png'
import ZyroLogo from './PNGS/Zyro Logo White.png'
import SurfsharkLogo from './PNGS/SurfsharkLogo.png'
import Tuta from './PNGS/TUTA.png'
import Wolt from './PNGS/WOLT.png'
import CandyPop from './PNGS/CANDY POP.png'
const SponsorsComponent = () => {
    return (
        <div className=" inline-grid justify-center mb-12  mt-12 break-normal text-white text-xl font-bold font-sans">
            <div className="bg-gray-900 mt-6 pr-4 pl-4 rounded-xl w-auto">
                <div className="grid grid-rows-2 p-6 grid-cols-3 gap-10 grid-flow-rows text-left mt-6">
                    <div className="flex justify-center items-center">
                        <img src={TCLogo} alt="logo" className="cursor-pointer" onClick={() => {window.open("https://www.topocentras.lt/", "_blank")}} />
                    </div>
                    <div className="col-span-2 text-justify">
                        Nori atsinaujinti savo įrangą ir pakelti savo lygį? Topo Centre rasi viską ko tau reikia. Nuo pilnai sukomplektuoto kompiuterio, iki naujos mechaninės klaviatūros.
                        <hr />
                    </div>  
                    
                    <div className="flex justify-center items-center">
                        <img src={ViperLogo}  alt="logo" className="cursor-pointer" onClick={() => {window.open("https://viper.patriotmemory.com/", "_blank")}} />
                    </div>
                    <div className="col-span-2  text-justify">
                        Lyderiaujantys SSD, RAM ir periferijos gamintojai. Įsikūrę 1985 metais Amerikoje. Žaidėjams suteikiantys geriausią galios ir kainos santykį rinkoje.
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Wolt} alt="logo" className="h-20 cursor-pointer" onClick={() => {window.open("https://wolt.com/lt/apply-as-courier?utm_source=Affiliate&utm_medium=banner&utm_campaign=LTU_Vilnius_Web_COURIER_LOCAL_VNO12&utm_content=FILLQ", "_blank")}}/>
                    </div>
                    {/* https://wolt.com/lt/apply-as-courier?utm_source=Affiliate&utm_medium=banner&utm_campaign=LTU_Vilnius_Web_COURIER_LOCAL_VNO12&utm_content=FILLQ */}
                    <div className="col-span-2  text-justify">
                        Su Wolt neįtikėtinai lengvai atrasi ir gausi tai, ko nori. Puikių restoranų meniu, maisto prekės ir viskas, ko tau gali prireikti bus pristatyta - greitai, patikimai ir už prieinamą kainą.
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={ZyroLogo} alt="logo" className="h-20 cursor-pointer" onClick={() => {window.open("https://zyro.com/lt", "_blank")}}/>
                    </div>
                    <div className="col-span-2 text-justify">
                        Susikurk svetainę ar el. parduotuvę su Zyro lengvai ir greitai! Gauk iki 86% nuolaidą, 3 nemokamus mėnesius ir domeną dovanų su kodu FILLQ. (Nuoroda)
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={SurfsharkLogo} alt="logo" className="h-20 cursor-pointer" onClick={() => {window.open("https://surfshark.deals/FILLQ", "_blank")}}/>
                    </div>
                    <div className="col-span-2 text-justify">
                        Po visų duomenų nesaugumo skandalų būtų nuodėmė naršyti internete be VPN. Gera žinia ta, kad Surfshark paruošė jums labai gerą deal‘ą. Naudok kodą FILLQ(https://surfshark.deals/FILLQ) ir gauk 83% nuolaidą bei nemokamai net keturis papildomus mėnesius.
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Tuta} alt="logo" className="h-20 cursor-pointer" onClick={() => {window.open("https://tuta.lt/", "_blank")}}/>
                    </div>
                    <div className="col-span-2 text-justify">
                        Nori kartu su komanda ar kolektyvu pasidaryti išskirtinius marškinėlius?
                        Susisiek su Tūta, jie profesionaliai patars ir padės visais klausimais.
                        Iron Wolves komanda naudoja išskirtinai tik Tūtos esports marškinėlius!
                    </div>
                    {/* <div>
                        <img src={CandyPop} alt="logo" />
                    </div>
                    <div className="col-span-2">
                        CANDYPOP
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default SponsorsComponent
