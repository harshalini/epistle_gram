import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home, Login, SignUp, Notes, ArchivePage, TrashPage } from "../pages";
import { RequiresAuth } from "../pages/auth/requiresAuth";
export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/notes" element={
                <RequiresAuth>
                    <Notes />
                </RequiresAuth>} />
            <Route path="/archive" element={
                <RequiresAuth>
                    <ArchivePage />
                </RequiresAuth>} />
            <Route path="/trash" element={
                <RequiresAuth>
                    <TrashPage />
                </RequiresAuth>} />
        </Routes>
    )
}