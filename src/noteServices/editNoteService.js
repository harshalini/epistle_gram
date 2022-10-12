import axios from "axios";
export const EditNoteHandler = async (note, _id) => {
    const authToken = localStorage.getItem("authToken")
    try {
      const res = await axios.post(
        `/api/notes/${_id}`,
        {
          note
        },
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      return res;
    } catch (e) {
      console.error(e);
    }
  };