import React from 'react'
import Podium from '../components/Podium/Podium.js'

const Rules = () => {
    return (
        <div className="grid justify-center mb-12  mt-12 text-center text-white text-3xl font-bold font-sans">
            FILLQ INFORMACIJA
            <div className="bg-gray-900 mt-6 pr-4 pl-4 rounded-xl pb-7 w-auto">

                <div className="bg-gray-900 colspan-2 text-xl text-left mt-12 m-2 rounded-lg">
                    <p className="text-3xl text-center mb-2">TAISYKLĖS</p>
                    <ul>
                        <li> 1. Visi žaidimai transliuojami </li>
                        <li> 2. Žaidžiama tik FILL </li>
                        <li> 3. Negalima prašyti kitos rolės </li>
                        <li> 4. Žaidžiama tik solo </li>
                        <li> 5. Žaidžiama tik su viena paskyra </li>
                    </ul>
                    <hr className=" my-6" />
                    <p className="text-3xl text-center ">PRIZAI</p>
                    <Podium />
                    <div className="gird grid-rows-2 gap-10 text-center m-6">
                        <div>
                            <p >
                                4. 100€ &nbsp;&nbsp;
                                5. 75€ &nbsp;&nbsp;
                                6. 65€ &nbsp;&nbsp;
                                7. 55€
                            </p>
                        </div>
                        <div>
                            <p>
                                8. 45€ &nbsp;&nbsp;
                                9. 35€ &nbsp;&nbsp;
                                10. 25€ 
                            </p>
                        </div>
                    </div>
                    Vienas dalyvis gaus 100€ bonus
                </div>
            </div>
        </div>
    )
}

export default Rules
