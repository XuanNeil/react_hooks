# useCallback

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

- Return a memoized callback.
- Chuyển 1 callback và 1 array dependencies.
- useCallback sẽ trả về phiên bản được ghi nhớ của callback chỉ thay đổi nếu 1 trong các dependency thay đổi.
- Điều này hữu ích khi chuyển các lệnh gọi lại đến các thành phần con được tối ưu hóa dựa trên bình đẳnh tham chiếu để
  ngăn các render không cần thiết.