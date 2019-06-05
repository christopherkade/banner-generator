import { useState } from "react"

const getRandomColor = () => {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

/**
 * Handles our input states & updates
 */
const useInputs = () => {
  const [bgColor, setBgColor] = useState("black")
  const [title, setTitle] = useState("Hello DEV 🎉")
  const [titleSize, setTitleSize] = useState("5")
  const [titleColor, setTitleColor] = useState("white")
  const [borderColor, setBorderColor] = useState("white")
  const [hasBorder, setHasBorder] = useState(true)

  const randomizeInputs = () => {
    setBgColor(getRandomColor())
    setTitleColor(getRandomColor())
    setHasBorder(Math.random() >= 0.5)
    setBorderColor(getRandomColor())
  }

  return [
    { bgColor, title, titleSize, titleColor, borderColor, hasBorder },
    { setBgColor, setTitle, setTitleSize, setTitleColor, setBorderColor, setHasBorder, randomizeInputs }
  ]
}

export default useInputs
