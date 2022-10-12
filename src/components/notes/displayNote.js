import React from "react";
import { useNoteData, useArchive, useTrash } from "../../context/allContext";
import { GetPriority, GetColor, GetLabeledNotes, DateSort } from "../../utils/filter-utils";

export const DisplayNote = () => {
  const { note, dispatch, setNoteEdit } = useNoteData();
  const { ArchiveNote } = useArchive();
  const { TrashNote } = useTrash();
  const compose = (...getNoteCard) => (note) => getNoteCard.reduce((data, getNoteCard) => getNoteCard(data), note);
  const filteredNotes = compose(GetPriority, GetColor, GetLabeledNotes, DateSort)(note)
  const pinnedNotes = [], unPinnedNotes = []
  const getPinnedNotes = filteredNotes.map(note => note.pin ? pinnedNotes.push(note) : pinnedNotes)
  const getUnpinnedNotes = filteredNotes.map(note => note.pin === false ? unPinnedNotes.push(note) : unPinnedNotes)
 
  const updateNoteHandler = (note) => {
    setNoteEdit(true)
    dispatch({ type: "EDIT_NOTE", payload: note });
    window.scroll({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      <h1 className="note-heading">Your Notes</h1>
      {pinnedNotes.length > 0 ?
        <div>
          <h2 className="note-heading">Pinned notes</h2>
          <div className="note-grid">
            {filteredNotes.map((n) => {
              const { title, content, _id, color, label, priority, pin, date } = n;
              const creationDate = new Date(date);
              return (
                pin &&
                <div key={_id} className={`added-note color-${color}`}>
                  <button type="button" className={`pin-button pinned mg-top`}
                  ><i class="fa-solid fa-thumbtack"></i></button>
                  <div className="title-div">
                    <h3>{title}</h3>
                  </div>
                  <div className="content-div">
                    <p className="note-content">{content}</p>
                  </div>
                  <div className="label-and-priority">
                    {label !== "" ? <p className="note-flex added-label">{label}</p> : null}
                    {priority !== "" ? <p className="note-flex added-priority">{priority}</p> : null}
                  </div>
                  <div className="date-div">
                    <p>{creationDate.toLocaleDateString()} </p>
                    <p>{creationDate.toLocaleTimeString()}</p>
                  </div>
                  <div className="note-actions">
                    <button onClick={() => ArchiveNote(note, _id)}><i className="fa-solid fa-arrow-down-long"></i></button>
                    <button onClick={() => TrashNote(note, _id)}><i className="fa-solid fa-trash-can"></i></button>
                    <button className="note-btn"
                      onClick={() => {
                        updateNoteHandler(n)
                      }}
                    ><i className="fa-solid fa-pen-to-square"></i></button>
                  </div>
                </div>
              )
            })}
          </div>
        </div> :
        null}
      {unPinnedNotes.length > 0 ?
        <div>
          {pinnedNotes.length > 0 && <h2 className="note-heading">Others</h2>}
          <div className="note-grid">
            {filteredNotes.map((n) => {
              const { title, content, _id, color, label, priority, pin, date } = n;
              const creationDate = new Date(date);
              return (
                !pin &&
                <div key={_id} className={`added-note color-${color}`}>
                  <div className="title-div">
                    <h3>{title}</h3>
                  </div>
                  <div className="content-div">
                    <p className="note-content">{content}</p>
                  </div>
                  <div className="label-and-priority">
                    {label !== "" ? <p className="note-flex added-label">{label}</p> : null}
                    {priority !== "" ? <p className="note-flex added-priority">{priority}</p> : null}
                  </div>
                  <div className="date-div">
                    <p>{creationDate.toLocaleDateString()} </p>
                    <p>{creationDate.toLocaleTimeString()}</p>
                  </div>
                  <div className="note-actions">
                    <button onClick={() => ArchiveNote(note, _id)}><i className="fa-solid fa-arrow-down-long"></i></button>
                    <button onClick={() => TrashNote(note, _id)}><i className="fa-solid fa-trash-can"></i></button>
                    <button className={`note-btn`}
                      onClick={() => updateNoteHandler(n)}
                    ><i className="fa-solid fa-pen-to-square"></i></button>
                  </div>
                </div>
              )
            })}
          </div>
        </div> :
        note.length === 0 && <h2>No notes here! Add a note!</h2>}

    </div>
  );
}