import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from 'react';
import "./DragableTable.css"
import { GiTrophy } from 'react-icons/gi';

const DragableTable = ({ allParticipants }) => {
    const [players, updatePlayers] = useState(allParticipants);
    const [userID, setUserID] = useState(0);

    useEffect(() => {
        setUserID(localStorage.getItem('twitchCode'))
    }, [setUserID])
    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(players);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatePlayers(items);
    }
    const savePickEms = () => {
        console.log(players)
    }
    return (
        <div className="mt-12 text-center text-white text-3xl font-bold font-sans">
            FILLQ DALYVIŲ PICK'EMS
            <div className="m grid md:grid-cols-3 sm:grid-cols-1 bg-gray-900 mt-6 pr-4 pl-4 rounded-xl pb-7">
                <div className="bg-gray-900 mt-12 m-2 rounded-lg">
                    <p>KAIP VEIKIA PICK'EMS</p>
                    <p className="text-base text-justify m-4">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their perception
                        of themselves! They're slowed down by their perception of
                        themselves. If you're taught you can’t do anything, you
                    </p>
                    <p className="pt-4">PRIZAI</p>
                    <p className="text-base text-justify m-4">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their perception
                        of themselves! They're slowed down by their perception of
                        themselves. If you're taught you can’t do anything, you
                    </p>
                    <hr className="mr-4 ml-4 mt-6"/>
                    <p className="pt-4 text-xl">PASIRINKTI LIKO LAIKO: 12H:30M:30S</p>
                    {/* <hr className="m-auto" ></hr> */}
                </div>
                <div className="col-span-2 mt-12">
                    <p>TAVO PICK'EMS</p>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="players">
                            {(provided) => (
                                <ul className="characters mt-4" {...provided.droppableProps} ref={provided.innerRef}>
                                    {players.map(({ name, image }, index) => {
                                        return (
                                            <Draggable key={name} draggableId={name} index={index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                                                        className={`mb-2 flex items-center bg-gradient-to-r from-purple-800 to-green-500 px-4 rounded-lg
                                                        ${(index + 1) === 1 ? "py-8 mt-1 border-4 text-4xl"
                                                                : (index + 1) === 2 ? "py-4 border-2 text-3xl"
                                                                    : (index + 1) === 3 ? "py-3 border-2 text-2xl"
                                                                        : "py-2 text-base"}`}>
                                                        <p className="text-white font-bold">
                                                            {(index + 1) === 1 ? <GiTrophy className="inline mb-1 mr-2" style={{ color: "#FFD700" }} />
                                                                : (index + 1) === 2 ? <GiTrophy className="inline mb-1 mr-2" style={{ color: "#C0C0C0" }} />
                                                                    : (index + 1) === 3 && <GiTrophy className="inline mb-1 mr-2" style={{ color: "#CD7F32" }} />}
                                                            {index + 1}. {name}
                                                        </p>
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                    {/* TODO: ADD CHECK HERE IF USER IS LOGGED IN */}
                    {userID !== null && 
                    <button onClick={() => savePickEms()}
                        className="bg-transparent hover:bg-purple-400 text-purple-400 text-lg font-semibold hover:text-white py-1 px-2 border border-purple-400 hover:border-transparent rounded" >
                        IŠSAUGOTI
                    </button>}

                </div>

            </div>
        </div>
    )
}

export default DragableTable
