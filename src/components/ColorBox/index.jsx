import { useState } from "react";
import styles from './ColorBox.module.scss'

/**
 * Tạo một hàm random một color trong mảng
 * Tạo một hàm nhận giá trị random đó và lưu vào trong localStorage
 * Tạo giá trị khởi tạo của useState là callback function với giá trị trả về là giá trị đã lưu trong localStorage
 */

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'orange', 'black', 'blue']

  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length)

  return COLOR_LIST[randomIndex]

}

export function ColorBox() {
  
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'deeppink'
    // console.log(initColor)
    return initColor
  })

  function handleBoxClick() {
    const newColor = getRandomColor()
    setColor(newColor)
    localStorage.setItem('box-color', newColor)
  }

  return (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: color }}
    >
      <button className={styles.btn} onClick={handleBoxClick}>Change Color</button>
      <p>{color}</p>
    </div>
  )

}

