import React from 'react';
import SearchItems from './SearchItems';
import { context } from "./Context";

function ItemsList() {
    const contextValue = React.useContext(context)

    return (
        <div>
            <SearchItems />
            {contextValue.error ? (
                <h3>{contextValue.error.toString()}</h3>
            ) : (
                <ul>{contextValue.loading? 
                    <p>Loading Users ....</p> : 
                    contextValue.gitItems.length < 1 ? 
                        <p>No Result</p> : 
                        contextValue.gitItems.map((aUser,index) => 
                        contextValue.searchType==='users'?
                        <div key={index}>{index+1}:{aUser.login}</div>
                        :<div key={index}>{index+1}:{aUser.full_name}</div>)}
                </ul>)
            }
        </div>
    );

}

export default ItemsList;