requirement:
1. Tạo 1 trang web với ngôn ngữ bất kỳ, với tên miền bất kỳ và publish ra Internet bằng
một hosting bất kỳ, kể cả free hosting (tức là có thể truy cập được từ mọi nơi, giả sử
tên miền là https://abc.com)
2. Tạo 3 trang trên website đó như sau:
a. Trang chủ (homepage) có URL là https://abc.com, nội dung chỉ có 1 dòng static
text “Welcome” và 2 đường dẫn đến 2 trang (Page 1 và Page 2) bên dưới
b. Trang 1 có URL là https://abc.com/page1, nội dung là static text “Page 1”
c. Trang 2 có URL là https://abc.com/page2, nội dung là static text “Page 2”
3. Cấu hình:
a. Khi truy cập vào homepage và Trang 2 thì tất cả mọi người truy cập bình thường
được từ Internet
b. Khi truy cập vào Trang 1 thì website sẽ xuất hiện promt/form/popup tùy ý để
yêu cầu user đăng nhập bằng tài khoản Google (hoặc bất kỳ tài khoản social
network nào như Facebook, Instagram, X, vv...). Đăng nhập thành công thì mới
redirected lại về https://abc.com/page1 để xem được nội dung trang 1

- flight-diaries
  - backend
  - frontend
    - dist