import { Sidebar } from "../components/allComp";
import { useTrash } from "../context/trashContext";
export const TrashPage = () => {
    const { noteTrash, RestoreTrashNote, DeleteNoteFromTrash } = useTrash();
    return (
        <div>
            <Sidebar />
            <div>
                <div className="archive-div">
                    <h1 className="note-heading">Trash</h1>
                    {noteTrash.length > 0 ?
                        <div className="note-grid">
                            {noteTrash.map(({ title, content, _id, color, label, priority }) => (
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
                                    <div className="note-actions">
                                        <button onClick={() => RestoreTrashNote(noteTrash, _id)}><i className="fa-solid fa-trash-arrow-up"></i></button>
                                        <button onClick={() => DeleteNoteFromTrash(noteTrash, _id)}><i className="fa-solid fa-ban"></i></button>
                                    </div>
                                </div>
                            )
                            )}
                        </div> :
                        <h2>No notes in Trash</h2>}
                </div>
            </div>
        </div>
    );
}