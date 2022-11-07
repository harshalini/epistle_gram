import { useState } from "react";
import { useNoteData } from "../../context/allContext"
import { ColorPalette, NoteLabel, NotePriority } from "./features";
export const AddNote = () => {
    const { noteState, dispatch, AddNewNote, UpdateNote, note, noteEdit, setNoteEdit } = useNoteData();
    const [palette, showPalette] = useState(false)
    const [noteLabel, showNoteLabel] = useState(false)
    const [notePriority, showNotePriority] = useState(false)
    const setClrPalette = () => {
        showPalette(palette => !palette)
    }
    const setNoteLabel = () => {
        showNoteLabel(noteLabel => !noteLabel)
    }

    const setNotePriority = () => {
        showNotePriority(notePriority => !notePriority)
    }
    return (
        <div>
            <form className={`note-form color-${noteState.color}`}
                onSubmit={(e) => {
                    e.preventDefault();
                    const alreadyNote = note.some(n => n._id === noteState._id)
                    if (alreadyNote) {
                        UpdateNote(noteState, noteState._id)
                        setNoteEdit(false)
                    }
                    else
                        AddNewNote(noteState)
                    dispatch({ type: "CLEAR-NOTE" });
                    dispatch({ type: "SET-DATE", payload: Date.now() })
                }
                }>
                <button type="button" className={noteState.pin ? `pin-button pinned` : `pin-button unpinned`}
                    onClick={() => {
                        dispatch({ type: "SET-PIN", payload: !noteState.pin })
                    }}
                ><i class="fa-solid fa-thumbtack"></i></button>

                <div className="cancel-btn-div">
                    {noteEdit && <button className="cancel-btn" title="cancel"
                        onClick={() => {
                            setNoteEdit(false)
                            dispatch({ type: "CLEAR-NOTE" })
                        }}
                    ><i class="fa-solid fa-xmark"></i></button>}
                </div>
                <input
                    value={noteState.title}
                    onChange={
                        (e) => dispatch({ type: "SET-TITLE", payload: e.target.value })}
                    placeholder="Title"
                    className={`note-ip title-input color-${noteState.color}`}
                    required
                />
                <input value={noteState.content}
                    onChange={(e) => dispatch({ type: "SET-CONTENT", payload: e.target.value })}
                    placeholder="Add a note here"
                    className={`note-ip content-input color-${noteState.color}`}
                    required
                />
                <div className="label-and-priority">
                    {noteState.label !== "" ? <p className="note-flex added-label">{noteState.label}</p> : null}
                    {noteState.priority !== "" ? <p className="note-flex added-priority">{noteState.priority}</p> : null}
                </div>
                <div className="note-actions feature-btns">
                    <button type="button" onClick={setNoteLabel}><i class="fa-solid fa-tag"></i></button>
                    <button type="button" onClick={setClrPalette}><i class="fa-solid fa-palette"></i></button>
                    <button type="button" onClick={setNotePriority}><i class="fa-solid fa-bars-progress"></i></button>
                </div>
                <button
                    className="add-btn"
                    title="Add Note"
                    type="submit">
                    {noteEdit ? <p className="update-btn">Update</p> :
                        <i className="fa-solid fa-circle-plus"></i>
                    }
                </button>
            </form>
            {palette ? <ColorPalette /> : null}
            {noteLabel ? <NoteLabel /> : null}
            {notePriority ? <NotePriority /> : null}
        </div>
    )
}