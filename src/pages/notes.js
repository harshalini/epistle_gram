import { Sidebar, AddNote, DisplayNote } from "../components/allComp";
import { Filters } from "../components/filters/filters";
export const Notes = () => {
    return (
        <div>
            <Sidebar />
            <Filters />
            <AddNote />
            <DisplayNote />
        </div>
    )
}