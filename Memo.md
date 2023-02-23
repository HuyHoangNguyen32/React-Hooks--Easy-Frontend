

## useState
- Input : giá trị khởi tạo ban đầu và giá trị này chỉ được dùng một lần duy nhất -> nếu giá trị khởi tạo là một hàm phức tạp thì nên truyền nó vào trong `useState` dưới dạng callback function
- Output : một mảng gồm hai phần tử -> ví dụ : [color, setColor]
- useState khi cập nhật giá trị mới nó sẽ áp dụng replacing thay vì merging do đó nếu muốn giữ lại giá trị cũ và cập nhật thêm giá trị mới thì hãy dùng dấu ...