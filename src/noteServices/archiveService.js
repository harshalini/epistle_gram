import axios from "axios"

const AddNoteToArchive = async (data, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/notes/archives/${_id}`, {
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

const RestoreFromArchive = async (data, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
        const res = await axios.post(`/api/archives/restore/${_id}`, {
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

export { AddNoteToArchive, RestoreFromArchive }