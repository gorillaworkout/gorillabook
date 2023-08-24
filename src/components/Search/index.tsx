import React from "react"
// import Logo from "../../assets/square-logo.svg"

export interface SearchProps {
  title?: string
}

export const Search: React.FC<SearchProps> = (
  { title } = { title: "A simple Search Props template" }
) => {
  return (
    <>
     <input type="text" className="w-[200px] w-[60px] rounded-md border-2" />
    </>
  )
}
