import { useState } from "react"

const useInputs = () => {
  const [bgColor, setBgColor] = useState("#BCE7FD")
  const [title, setTitle] = useState("My article's title")
  const [titleColor, setTitleColor] = useState("white")

  return [{ bgColor, title, titleColor }, { setBgColor, setTitle, setTitleColor }]
}

export default useInputs
