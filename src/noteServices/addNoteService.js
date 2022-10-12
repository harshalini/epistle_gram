import axios from "axios";
export const AddNoteHandler = async (data) => {
  const authToken = localStorage.getItem("authToken")
  try {
    const res = await axios.post(
      "/api/notes",
      {
        note: data 
      },
      {
        headers: { authorization: authToken }
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};