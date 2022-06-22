import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getPokemons } from './store/slices/pokemon/thunks'
export const PokemonApp = () => {
    const dispatch = useDispatch()
    const { pokemons = [], page, isLoading } = useSelector(state => state.pokemons)
    useEffect(() => {
        dispatch(getPokemons())

    }, [])

    const nextPage =()=>{
        dispatch(getPokemons(page))
    }
    return (
        <>
            <div>PokemonApp</div>
            <hr />
            <span>{isLoading ? 'Cargando' : ''}</span>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        {pokemon.name}
                    </li>))}
            </ul>
            <button disabled={isLoading} onClick={nextPage}>
                Next
            </button>
        </>
    )
}
