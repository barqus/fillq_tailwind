import React, {useEffect} from 'react'
import useKeypress from '../UseKeypress'
import { useRef } from 'react';
import useOutsideAlerter from '../UseOutsideAlerter';
import { AiOutlineClose } from 'react-icons/ai'
import Amplify, { Analytics } from 'aws-amplify';
// TODO: HOW TO IMPLEMENT RECORD THINGIES
Analytics.record({ name: 'PlayerModal visited'});
const PlayerModal = ({ setShowModal, participant }) => {
    useEffect(() => {
        Analytics.record({ name: 'PlayerModal visited: '+participant.nickname });
    }, [])
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setShowModal);
    useKeypress('Escape', () => {
        setShowModal(false)
    });
    return (
        <>
            <div
                className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                style={{ background: "linear-gradient(120deg,#722f818a 0%, rgba(3, 71, 57, 0.7) 100%)" }} >
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    <div className="mt-32 border-2 border-opacity-20 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none" ref={wrapperRef}>
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-gradient-to-r from-purple-800 to-green-500 ">
                            <h3 className="text-3xl font-semibold text-white">
                                {participant.nickname}
                            </h3>
                            <div className=" cursor-pointer p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                <AiOutlineClose onClick={() => setShowModal(false)}/>  
                            </div>
                            {/* <button
                                className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    
                                </span>
                            </button> */}
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
                                <div className="">
                                    <img  className="border-2 border-purple-400 border-opacity-60 filter drop-shadow-2xl object-cover mt-5 w-60 h-60 inline rounded-lg" src="https://picsum.photos/id/237/200/300" alt="dalyvis"/>
                                    {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p> */}
                                    <p className="mt-4 mb-2 text-purple-400">{participant.name}</p>
                                    <p className="my-2 text-purple-400">{participant.surname}</p>
                                    
                                    
                                </div>
                                <div className="col-span-3 text-left">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        PASIEKIMAI <br/>
                                        Nubėgau pilną maratoną.
                                    </p>
                                    <hr className="opacity-30" />
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p><p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p>
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p><p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p>
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p><p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 border-2 border-red-500 rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                UŽDARYTI
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default PlayerModal
