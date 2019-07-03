import { useState } from "react"

const getRandomColor = () => {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

/**
 * Handles our input states & updates
 */
const useInputs = () => {
  const [bgColor, setBgColor] = useState("#151513")
  const [title, setTitle] = useState("DEV banner generator 🎉")
  const [titleSize, setTitleSize] = useState("4")
  const [titleColor, setTitleColor] = useState("white")
  const [borderColor, setBorderColor] = useState("white")
  const [borderSize, setBorderSize] = useState(0)

  // Updates both the bg color and the website's border colors
  const randomBgColorChange = (color) => {
    setBgColor(color)
    document.body.style.setProperty('--border-color', color)
  }

  const randomizeInputs = () => {
    randomBgColorChange(getRandomColor())
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
