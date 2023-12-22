import { useState } from "react"

const initialState = {
    name: '',
    email: '',
    message: '',
}


export const useForm = () => {

    const [ state, setState ] = useState( initialState );

    const handleInput = ( name, value ) => {
        setState(( prevState ) => ({
            ...prevState,
            [ name ]: value
        }))
    }

    const reset = () => {
        setState( initialState );
    }

    return {
        state,
        handleInput,
        reset,
    }
}
