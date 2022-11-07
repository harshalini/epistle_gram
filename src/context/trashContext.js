import { createContext, useState, useContext, useEffect } from "react";
import { AddNoteToTrash, RestoreFromTrash, DeleteFromTrash, ArchiveToTrash } from "../noteServices/trashService";
import axios from "axios";
const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [noteTrash, setNoteTrash] = useState([])
  const authToken = localStorage.getItem("authToken")
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { trash }
        } = await axios.get('/api/trash', {
          headers: { authorization: authToken }
        });
        setNoteTrash(trash);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [noteTrash]);

  const TrashNote = async (noteTrash, _id) => {
    const getTrash = await AddNoteToTrash(noteTrash, _id)
    setNoteTrash(getTrash.data.trash)
  }

  const RestoreTrashNote = async (noteTrash, _id) => {
    const restoredTrashNote = await RestoreFromTrash(noteTrash, _id)
    setNoteTrash(restoredTrashNote.data.trash)
  }

  const DeleteNoteFromTrash = async(noteTrash, _id) => {
    const response = await DeleteFromTrash(noteTrash, _id)
    setNoteTrash(response.data.trash)
  }

  const ArchiveNoteToTrash = async(noteTrash, _id) => {
    const response = await ArchiveToTrash(noteTrash, _id)
    setNoteTrash(response.data.trash)
  }

  return <TrashContext.Provider value={{ noteTrash, TrashNote, RestoreTrashNote, setNoteTrash, DeleteNoteFromTrash, ArchiveNoteToTrash }}>
    {children}
  </TrashContext.Provider>
}

const useTrash = () => useContext(TrashContext)

export { TrashProvider, useTrash }