import { forwardRef } from 'react'
import { SearchBoxContainer } from './styles'

interface SearchBoxProps {
  onSubmit: () => void;
}

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(({ onSubmit }, ref) => {
  return (
    <SearchBoxContainer>
      <input 
        type="text" 
        placeholder="Busque por um usuário ou empresa" 
        className="search--input" 
        ref={ref}
      />
      <button 
        type="button" 
        className="search--button"
        onClick={onSubmit}
      >
        Buscar
      </button>
    </SearchBoxContainer>
  )
})

export { SearchBox };