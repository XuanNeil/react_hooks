#useState
## 1. Syntax
    - syntax: const [state, setState] = useState(initialState);
    - returns: a stateful value, and a function to update it.

- Trong lần render đầu tiên, state được trả về với initialState - đối số đầu tiên.
- Function setState được sử dụng để update state. Nó chấp nhận 1 giá trị trạng thái mới và xếp hàng (enqueues) đợi re-render component. (setState(newState))
- Trong các lần hiển thị tiếp theo, giá trị đầu tiên do useState return sẽ luôn là state mới nhất sau khi áp dụng các bản cập nhật.

## 2. Functional updates
    + Nếu state mới được tính bằng state trước đó, bạn có thể chuyển 1 hàm (callback) vào setState.
    + Hàm sẽ nhận state trước đó, và return an updated state.
      function Counter({initialCount}) {
          const [count, setCount] = useState(initialCount);
          return (
            <>
                Count: {count}
                <button onClick={() => setCount(initialCount)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </>
          );
      }
    + Nếu update function return giá trị chính xác giống như trạng thái trạng thái hiện tại, kết xuất sau đó sẽ bị bỏ qua hoàn toàn.
    + Note:
            - setState trong class components là merge update objects
            - setState trong function components là replace vì thế phải kết hợp với object spread syntax:
              const [state, setState] = useState({});
              setState(prevState => {
              // Object.assign would also work
              return {...prevState, ...updatedValues};
              });

## 3. Lazy initial state
    - Đối số intialState là trạng thái được sử dụng trong quá trình render đầu tiên.
    - Trong quá trình tiếp theo, nó sẽ bị bỏ qua.
    - Nếu trạng thái ban đầu là kết quả của 1 phép tính tốn kém, có thể cung cấp 1 hàm thay thế, hàm này sẽ chỉ được thực thi trong lần render đầu tiên.
        const [state, setState] = useState(() => {
            const initialState = someExpensiveComputation(props);
            return initialState;
        });
## 4. Bailing out of a state update (Bỏ sót bản cập nhật state).
    - Nếu bạn cập nhật state cùng giá trị state hiện tại, React sẽ k re-render lại (Object.is)
## 5. Batching of state updates (hàng loại cập nhật state).
    - React nhóm 1 số bản cập nhật state thành 1 bản render duy nhất để cải thiện hiệu suất và không ảnh hưởng đến hành vi ứng dụng của bạn.
    - Từ React 18, theo mặc định đã bật `Batching of state updates` cho tất cả bản cập nhật.
