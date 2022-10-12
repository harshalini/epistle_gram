import { useFilteredData } from "../context/filter-context";
export const GetPriority = (filteredNotes) => {
  const { filterState: { priorityFilter } } = useFilteredData()
  priorityFilter.length !== 0 ?
    filteredNotes = filteredNotes.filter((note) => priorityFilter.includes(note.priority)) :
    filteredNotes;
  return filteredNotes;
}

export const GetLabeledNotes = (filteredNotes) => {
  const { filterState: {labelFilter}} = useFilteredData();
  labelFilter.length !== 0 ?
    filteredNotes = filteredNotes.filter((note) => labelFilter.includes(note.label)) :
    filteredNotes;
  return filteredNotes;
}

export const GetColor = (filteredNotes) => {
  const { filterState: {colorFilter}} = useFilteredData();
  colorFilter.length !== 0 ?
  filteredNotes = filteredNotes.filter((note) => colorFilter.includes(note.color)):
  filteredNotes;
  return filteredNotes
}

export const DateSort = (data) => {
  const { filterState: {dateSort} } = useFilteredData()
  if(dateSort === "latest_to_oldest")
  return [...data].sort((a, b) => b.date - a.date)
  else if(dateSort === "oldest_to_latest")
  return [...data].sort((a, b) => a.date - b.date)
  return data
}