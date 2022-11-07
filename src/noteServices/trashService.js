import axios from "axios"

const AddNoteToTrash = async (data, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`api/notes/trash/${_id}`, {
            note: data
        },
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        console.log("Error occured", error)
    }
}

const RestoreFromTrash = async (data, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/trash/restore/${_id}`, {
            note: data
        },
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        console.log("error occured", error)
    }
}

const ArchiveToTrash = async (data, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/archives/trash/${_id}`, {
            note: data
        },
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        console.log("error occured", error)
    }
}

const DeleteFromTrash = async(data, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.delete(`/api/trash/delete/${_id}`,
            {
                headers: { authorization: authToken }
            })
        return res;
    }
    catch (error) {
        console.log("error occured", error)
    }
}

export { AddNoteToTrash, RestoreFromTrash, ArchiveToTrash, DeleteFromTrash }