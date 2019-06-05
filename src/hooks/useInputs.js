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
  const [borderSize, setBorderSize] = useState(0)

  const randomizeInputs = () => {
    setBgColor(getRandomColor())
    setTitleColor(getRandomColor())
    setBorderSize(Math.floor(Math.random() * 11))
    setBorderColor(getRandomColor())
  }

  return [
    { bgColor, title, titleSize, titleColor, borderColor, borderSize },
    { setBgColor, setTitle, setTitleSize, setTitleColor, setBorderColor, setBorderSize, randomizeInputs }
  ]
}

export default useInputs
