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
        <div className="grid justify-center mb-12  mt-12 text-center text-white text-xl font-bold font-sans">
            FILLQ INFORMACIJA
            <div className="bg-gray-900 mt-6 pr-4 pl-4 rounded-xl w-auto">
                <div className="grid grid-rows-2 p-6 grid-cols-3 gap-10 grid-flow-rows text-left mt-6">
                    <div>
                        <img src={TCLogo} alt="logo" />
                    </div>
                    <div className="col-span-2">
                        Nori atsinaujinti savo įrangą ir pakelti savo lygį? Topo Centre rasi viską ko tau reikia. Nuo pilnai sukomplektuoto kompiuterio, iki naujos mechaninės klaviatūros. Hyperlink Topocentras
                    </div>
                    <div>
                        <img src={ViperLogo} alt="logo" />
                    </div>
                    <div className="col-span-2">
                        Lyderiaujantys SSD, RAM ir periferijos gamintojai. Įsikūrę 1985 metais Amerikoje. Žaidėjams suteikiantys geriausią galios ir kainos santykį rinkoje. (Hyperlink https://viper.patriotmemory.com)
                    </div>
                    <div>
                        <img src={Wolt} className="h-20" alt="logo" />
                    </div>
                    <div className="col-span-2">
                        Su Wolt neįtikėtinai lengvai atrasi ir gausi tai, ko nori. Puikių restoranų meniu, maisto prekės ir viskas, ko tau gali prireikti bus pristatyta - greitai, patikimai ir už prieinamą kainą.
                        Taip pat: matomi banner'iai turėtų link'inti į:https://wolt.com/lt/apply-as-courier?utm_source=Affiliate&utm_medium=banner&utm_campaign=LTU_Vilnius_Web_COURIER_LOCAL_VNO12&utm_content=FILLQ
                    </div>
                    <div>
                        <img src={ZyroLogo} alt="logo" />
                    </div>
                    <div className="col-span-2">
                        Susikurk svetainę ar el. parduotuvę su Zyro lengvai ir greitai! Gauk iki 86% nuolaidą, 3 nemokamus mėnesius ir domeną dovanų su kodu FILLQ. (Nuoroda)
                    </div>

                    <div>
                        <img src={SurfsharkLogo} alt="logo" />
                    </div>
                    <div className="col-span-2">
                        Po visų duomenų nesaugumo skandalų būtų nuodėmė naršyti internete be VPN. Gera žinia ta, kad Surfshark paruošė jums labai gerą deal‘ą. Naudok kodą FILLQ(https://surfshark.deals/FILLQ) ir gauk 83% nuolaidą bei nemokamai net keturis papildomus mėnesius.
                    </div>
                    <div>
                        <img src={Tuta} alt="logo" />
                    </div>
                    <div className="col-span-2">
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
