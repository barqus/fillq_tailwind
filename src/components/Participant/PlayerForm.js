import React, { useState } from "react";

const PlayerForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Frirst Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default PlayerForm
