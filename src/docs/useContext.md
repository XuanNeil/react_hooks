- Chấp nhận 1 context object (giá trị được trả về từ React.CreateContext) và trả về giá trị current context hiện tại cho
  context đó.
- Giá trị current context được xác định bởi giá trị prop của <MyContext.Provider> gần nhất phía trên thành phần đang gọi
  trong cây.

- Khi <MyContext.Provider> gần nhất phía trên thành phần cập nhật, Hook này sẽ kích hoạt kết xuất với giá trị context
  mới nhất được chuyển cho MyContext provider.
- Dừng quên rằng đối số của useContext phải là 'Chính object context của nó'.
    - vd: useContext(MyContext).
- Mẹo:
    - Nếu bạn đã quen thuộc với context API before hooks, useContext(MyContext) tương đương với
        1. static contextType = MyContext trong 1 class.
        2. <MyContext.Consumer>
    - useContext(MyContext) chỉ cho phép bạn đọc context và đăng ký các thay đổi của nó.
    - Bạn phải cần <MyContext.Provider> ở trên trong cây để cung cấp giá trị cho context này.
