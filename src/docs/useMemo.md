# useMemo

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- Return a memoized value.
- Chuyền 1 hàm callback và 1 array dependencies.
- useMemo sẽ chỉ tính toán lại value đã ghi nhớ khi 1 trong các dependency đã thay đổi.
- Tối ưu hóa này giúp tránh các tính toán tốn kém trên mỗi lần render.
- Hãy nhớ rằng function được truyền cho useMemo chạy trong quá trình render.
- Đừng làm bất cứ điều gì ở đó mà bạn thường không làm trong khi render.
- Nếu không có mảng nào được cung cấp vào dependency, 1 new value sẽ được tính toán trên mỗi lần render.