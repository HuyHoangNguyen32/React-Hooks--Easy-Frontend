import { useState } from "react";

/**
 * 
 * Người dùng nhập giá trị vào form và giá trị này sẽ được lưu vào biến value
 * Khi người dùng nhấn nút Submit giá trị này sẽ được truyền lên cho App thông qua props
 * Tạo một hàm ngăn chặn reload trình duyệt khi nhấn nút Submit
 * App sau khi nhận giá trị sẽ xử lý thêm vào mảng đã có trước đó để render
 */

export function TodoForm(props) {

  const { onSubmit } = props;
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    // prevent reloading browser
    e.preventDefault()
  }

  function handleClickSubmitBtn() {
    if(!onSubmit) return
    const formValues = {
      title: value
    }
    onSubmit(formValues)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button onClick={handleClickSubmitBtn}>Submit</button>
    </form>
  )
}