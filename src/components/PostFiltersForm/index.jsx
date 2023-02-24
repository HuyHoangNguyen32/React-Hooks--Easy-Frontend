import { useState, useRef } from "react";

export function PostFiltersForm(props) {

  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  function handleSearchTermChange(e) {
    const value = e.target.value
    setSearchTerm(value)

    if(!onSubmit) return

    // debounce
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value
      }
      onSubmit(formValues)
    }, 1000)

  }

  return (
    <form>
      <input 
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </form>
  )

}