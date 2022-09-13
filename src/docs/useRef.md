# useRef

1. Syntax:

```
 const refContainer = useRef(initialValue);
```

- returns 1 object ref có thể thay đổi thuộc tính .current được khởi tạo cho đối số được truyền vào initialValue.
- Object trả về sẽ tồn tại trong toàn bộ thời gian tồn tại của component đấy.
- Hãy nhớ rằng useRef không thông báo cho bạn khi nội dung của nó thay đổi.
- Việc thay đổi thuộc tính .current không gây ra re-render.
- Nếu bạn không muốn chạy 1 số code khi React đính kèm hoặc tách 1 tham chiếu đến DOM node, bạn có thể sử dụng 1
  callback ref để thay thế.