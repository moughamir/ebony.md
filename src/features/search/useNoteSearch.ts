import { Note } from "../notes/noteTypes";
import { useState, useMemo } from "react";

export const useNoteSearch = (notes: Note[]) => {
    const [query, setQuery] = useState('');

    const results = useMemo(() => {
        if (!query) return notes;
        return notes.filter(note =>
            note.content.toLowerCase().includes(query.toLowerCase()) ||
            note.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [notes, query]);

    return { query, setQuery, results };
};