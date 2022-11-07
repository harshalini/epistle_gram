export const NoteReducer = (noteState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET-TITLE":
            return { ...noteState, title: payload }
        case "SET-CONTENT":
            return { ...noteState, content: payload }
        case "SET-COLOR":
            return { ...noteState, color: payload }
        case "SET-LABEL":
            return { ...noteState, label: payload }
        case "SET-PRIORITY":
            return { ...noteState, priority: payload }
        case "SET-PIN":
            return { ...noteState, pin: payload }
        case "SET-DATE":
            return { ...noteState, date: payload }
        case "EDIT_NOTE":
            return { ...payload }
        case "CLEAR-NOTE":
            return {
                title: "",
                content: "",
                color: "",
                label: "",
                priority: "",
                pin: false,
                date: Number(new Date())
            }
        default:
            return noteState;
    }
}