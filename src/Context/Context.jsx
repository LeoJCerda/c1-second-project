import { useEffect } from "react";
import { createContext, useContext, useState, useReducer } from "react";

export const RecipeStates = createContext()

const initialState = JSON.parse(localStorage.getItem('favs')) || []

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV' :
            return [...state, action.payload]
        case 'DELETE_FAV':
            return [action.payload] //hay que completar
        default:
            throw new Error()
    }
}

const Context = ({children}) => {
    const [search, setSearch] = useState('')
    
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [favs, setFavs] = useState([])
    

    useEffect(() => {
        console.log(state)
        localStorage.setItem('favs', JSON.stringify(state))
    }, [state])

    return (
        <RecipeStates.Provider value={{
            search, setSearch,
            state, dispatch
            // favs, setFavs
        }}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)