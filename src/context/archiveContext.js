import { createContext } from "react";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { AddNoteToArchive, RestoreFromArchive } from "../noteServices/allServices";
import axios from "axios";
const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
  const [noteArchive, setNoteArchive] = useState([])
  const authToken = localStorage.getItem("authToken")

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { archives }
        } = await axios.get('/api/archives', {
          headers: { authorization: authToken }
        });
        setNoteArchive(archives);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [noteArchive]);

  const ArchiveNote = async (noteArchive, _id) => {
    const getArchive = await AddNoteToArchive(noteArchive, _id)
    setNoteArchive(getArchive.data.archives)
  }

  const RestoreArchiveNote = async (noteArchive, _id) => {
    const restoredArchiveNote = await RestoreFromArchive(noteArchive, _id)
    setNoteArchive(restoredArchiveNote.data.archives)
  }

  return <ArchiveContext.Provider value={{ noteArchive, ArchiveNote, RestoreArchiveNote, setNoteArchive }}>
    {children}
  </ArchiveContext.Provider>
}

const useArchive = () => useContext(ArchiveContext)

export { ArchiveProvider, useArchive }