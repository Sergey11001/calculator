import React, {useState} from 'react';
import SelectStatus from "../SelectStatus";
import DropArea from "../DropArea";

const Constructor:React.FC = () => {
    return (
        <div>
            <SelectStatus />
            <DropArea />
        </div>
    );
};

export default Constructor;