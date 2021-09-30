import React from 'react';
import { context } from "./Context";

function SearchItems() {
    const contextValue = React.useContext(context);

    return <input
        type="text"
        value={contextValue.textValue}
        placeholder="Enter search text"
        onChange={(event) => contextValue.changeTextValue(event.target.value)}
    />
}

export default SearchItems; 