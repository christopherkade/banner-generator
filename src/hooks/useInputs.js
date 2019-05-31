import { useState } from "react"

/**
 * Handles our input states & updates
 */
const useInputs = () => {
  const [bgColor, setBgColor] = useState("black")
  const [title, setTitle] = useState("Hello DEV 🎉")
  const [titleSize, setTitleSize] = useState("5")
  const [titleColor, setTitleColor] = useState("white")
  const [hasBorder, setHasBorder] = useState(true)
  const [borderColor, setBorderColor] = useState("white")

  return [
    { bgColor, title, titleSize, titleColor, hasBorder, borderColor },
    { setBgColor, setTitle, setTitleSize, setTitleColor, setHasBorder, setBorderColor }
  ]
}

export default useInputs
