import { useState } from "react";
import { useNoteData } from "../../context/noteContext";

const ColorPalette = () => {
    const { dispatch } = useNoteData();
    const defaultColor = "#83BD75"
    const Colors = [defaultColor, "cadetblue", "chocolate", "darkmagenta", "palevioletred", "brown", "goldenrod", "seagreen"]
    return (
        <div className="note-feature color-palette">
            {Colors.map((color) => (
                <p className="note-color"
                    style={{ backgroundColor: color }}
                    onClick={() => dispatch({ type: "SET-COLOR", payload: color })}
                ></p>
            ))}
        </div>
    )
}

const NoteLabel = () => {
    const { dispatch } = useNoteData();
    const [label, setLabel] = useState();
    return (
        <div className="note-feature label-div">
            <input className="note-label" type="text" placeholder="add label"
                onChange={(e) => setLabel(e.target.value)}
            />
            <button onClick={() => dispatch({ type: "SET-LABEL", payload: label })}>Add</button>
        </div>
    )
}

const NotePriority = () => {
    const { noteState, dispatch } = useNoteData();
    const priorities = ["high", "medium", "low"]
    return (
        <div className="note-feature priority-div">
            {priorities.map((notePriority) => {
                return (
                    <div key={notePriority._id}>
                        <input type="radio" id={notePriority} name="label"
                            checked={noteState.priority === notePriority}
                            onChange={() => dispatch({ type: "SET-PRIORITY", payload: notePriority })}
                        ></input>
                        <label htmlFor={notePriority}>{notePriority}</label>
                    </div>
                );
            })}
        </div>
    )
}

export { ColorPalette, NoteLabel, NotePriority }