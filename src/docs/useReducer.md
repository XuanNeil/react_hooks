# useReducer();

1. Syntax:

```
    const [state, dispatch] = useReducer(reducer, initialArg, init);
```

- Thường được ưu tiên hơn useState khi bạn có logic state phức tạp liên quan đến nhiều giá trị con hoặc khi state tiếp
  theo phụ thuộc vào state trước đó.
- Cũng cho phép tối ưu hóa hiệu suất cho các thành phần kích hoạt cập nhật sâu bởi vì bạn có thể dispatch xuống thay vì
  gọi lại (callbacks).
- Note:
    - React đảm bảo rằng dispatch function điều phối là ổn định và sẽ không thay đổi khi re-renders.
    - Đây là lý do tại sao an toàn nếu bỏ qua sự phụ thuộc useEffect or useCallback

2. Specifying the initial state (Chỉ định giá trị state ban đầu).

- Có 2 cách khác nhau để khởi tạo trạng thái.
- Cách đơn giản nhất là chuyển trạng thái ban đầu làm đối số thứ 2. ví dụ: const [state, dispatch] = useReducer(reducer,
  count: {initialCount}); Note:
- React không sử dụng state = initialState

3. Lazy initialization.

- Cũng có thể tạo trạng thái ban đầu 1 cách lười biếng.
- Để làm điều này, có thể chuyển 1 hàm init làm đối số thứ 3.
- Trạng thái ban đầu sẽ được đặt thành init (initialArg).
- Nó cho phép trích xuất logic để tính toán trạng thái ban đầu bên ngoài reducer.
- Điều này cũng hữu ích để đặt lại trạng thái sau này để phản hồi lại 1 action.

4. Bailing out of a dispatch

- Nếu bạn trả về cùng 1 giá trị trước đó, React sẽ không tạo new value hoặc action.