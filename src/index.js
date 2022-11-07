import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import {
  NoteDataProvider,
  AuthenticationProvider,
  ArchiveProvider,
  TrashProvider,
  FilterDataProvider
} from "./context/allContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <TrashProvider>
          <ArchiveProvider>
            <FilterDataProvider>
              <NoteDataProvider>
                <App />
              </NoteDataProvider>
            </FilterDataProvider>
          </ArchiveProvider>
        </TrashProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
