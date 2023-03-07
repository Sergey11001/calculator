import MainPage from "./pages/MainPage";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import React from "react";

const App: React.FC = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="wrapper">
                <MainPage/>
            </div>
        </DndProvider>

    );
}

export default App;
