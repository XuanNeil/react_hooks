# useLayoutEffect

- Giống như useEffect, nhưng nó kích hoạt đồng bộ (synchronous) sau all DOM mutations.
- Sử dụng để đọc bố cục từ DOM và re-render lại 1 cách đồng bộ (synchronous).
- Các cập nhật được lên lịch bên trong useLayoutEffect sẽ được xóa đồng bộ, trước khi trình duyệt có cơ hội vẽ lại.
- Note
  - Nếu bạn đang di chuyển mã từ class component, hãy lưu ý rằng useLayoutEffect kích hoạt cùng giai đoạn với
    componentDidMount và componentDidUpdate.
  - Tuy nhiên, nên bắt đầu với useEffect trước và chỉ thử dùng nếu điều đó gây ra sự cố.
