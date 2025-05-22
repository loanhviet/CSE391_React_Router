# React Router v6+ Demo

## Giới thiệu
Đây là dự án demo về React Router v6+, được phát triển cho CSE391. Dự án này minh họa cách sử dụng React Router để tạo ứng dụng web Single Page Application (SPA) với nhiều trang và điều hướng mượt mà.

## Công nghệ sử dụng
- React 18.3+
- React Router v6+
- CSS3 (với thiết kế responsive)

## Tính năng
- **Điều hướng cơ bản**: Sử dụng `BrowserRouter`, `Routes`, và `Route`
- **Điều hướng với liên kết**: Sử dụng component `Link`
- **Điều hướng lập trình**: Sử dụng hook `useNavigate`
- **Tham số đường dẫn**: Sử dụng cú pháp `:paramName` và hook `useParams`
- **Chuyển hướng**: Sử dụng component `Navigate`
- **Routes lồng nhau (Nested Routes)**: Sử dụng `Outlet` để hiển thị route con trong route cha
- **Breadcrumb Navigation**: Điều hướng theo dấu vết giúp người dùng hiểu vị trí hiện tại
- **Trang Not Found (404)**: Xử lý các đường dẫn không tồn tại
- **Search Params**: Sử dụng `useSearchParams` để xử lý các tham số tìm kiếm trong URL
- **Protected Routes**: Demo về cách bảo vệ các route yêu cầu xác thực
- **Giao diện người dùng chuyên nghiệp** với:
  - Thanh điều hướng (Navbar)
  - Trang chủ với sản phẩm nổi bật
  - Trang Dashboard với nested routes
  - Trang giới thiệu
  - Trang liên hệ với form
  - Trang chi tiết sản phẩm (với tham số động)
  - Footer

## Cấu trúc dự án
```
src/
  ├── components/
  │   ├── Breadcrumb.js
  │   ├── DashboardLayout.js
  │   ├── Footer.js
  │   └── Navbar.js
  ├── pages/
  │   ├── AboutPage.js
  │   ├── ContactPage.js
  │   ├── HomePage.js
  │   ├── ProductDetailPage.js
  │   └── dashboard/
  │       ├── Overview.js
  │       ├── Analytics.js
  │       ├── Settings.js
  │       └── Profile.js
  ├── App.css
  ├── App.js
  └── index.js
```

## Cài đặt
1. Clone dự án về máy local:
   ```
   git clone <repository-url>
   ```

2. Di chuyển vào thư mục dự án:
   ```
   cd CSE391_React_Router
   ```

3. Cài đặt các dependencies:
   ```
   npm install
   ```

4. Khởi chạy ứng dụng:
   ```
   npm start
   ```

5. Mở trình duyệt và truy cập: `http://localhost:3000`

## Hướng dẫn demo
1. **Điều hướng cơ bản**: Click các link trên thanh navigation để di chuyển giữa các trang
2. **Route Parameters**: Xem sản phẩm chi tiết từ trang chủ, chú ý URL thay đổi (vd: `/products/1`)
3. **Nested Routes**: Truy cập dashboard để thấy ví dụ về routes lồng nhau
4. **Breadcrumbs**: Chú ý breadcrumb thay đổi khi điều hướng giữa các trang
5. **Trang Not Found**: Thử truy cập một URL không tồn tại để xem trang 404
6. **Điều hướng lập trình**: Sử dụng các nút "Thêm vào giỏ hàng" hoặc "Quay lại" để thấy điều hướng bằng mã

## Các khái niệm kỹ thuật

### 1. React Router v6 so với v5

| Khía cạnh | React Router v5 | React Router v6 |
|-----------|----------------|----------------|
| Component bao bọc routes | `<Switch>` | `<Routes>` |
| Cách render component | `<Route component={Home} />` | `<Route element={<Home />} />` |
| Hook điều hướng | `useHistory()` | `useNavigate()` |
| Routes lồng nhau | Phức tạp hơn | Trực quan hơn với `<Outlet />` |
| Exact matching | Cần `exact` prop | Mặc định đã exact |

### 2. Các component chính của React Router v6

#### `BrowserRouter`
```jsx
<BrowserRouter>
  {/* Toàn bộ ứng dụng */}
</BrowserRouter>
```

#### `Routes` và `Route`
```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/products/:id" element={<ProductDetailPage />} />
</Routes>
```

#### `Link`
```jsx
<Link to="/about">About</Link>
```

#### `useNavigate`
```jsx
const navigate = useNavigate();
navigate('/contact');  // Chuyển hướng đến /contact
navigate(-1);          // Quay lại trang trước
```

#### `useParams`
```jsx
// Trong route: /products/:id
const { id } = useParams();  // id sẽ là giá trị động từ URL
```

#### `Navigate`
```jsx
<Route path="/old-path" element={<Navigate to="/new-path" replace />} />
```

#### `Outlet`
```jsx
// Trong component cha
<div className="layout">
  <h1>Dashboard</h1>
  <nav>
    <Link to="/dashboard">Overview</Link>
    <Link to="/dashboard/analytics">Analytics</Link>
    <Link to="/dashboard/settings">Settings</Link>
  </nav>
  
  {/* Route con sẽ render ở đây */}
  <Outlet />
</div>
```

#### `useSearchParams`
```jsx
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('search');

// Cập nhật query parameter
setSearchParams({ search: 'new-value' });
```

## Tài nguyên học tập
- [React Router v6 Official Documentation](https://reactrouter.com/en/main)
- [React Router v6 Tutorial](https://reactrouter.com/en/main/start/tutorial)

## Nội dung demo
1. **Giới thiệu tổng quan**: React Router là thư viện điều hướng tiêu chuẩn cho React, giúp tạo Single Page Application có điều hướng mượt mà.
2. **Điều hướng cơ bản**: Demo về BrowserRouter, Routes, Route và Link.
3. **Route lồng nhau**: Demo Dashboard với nhiều tab con sử dụng Outlet.
4. **Route Parameters**: Demo trang chi tiết sản phẩm với URL động.
5. **Programmatic Navigation**: Demo điều hướng bằng mã với useNavigate.
6. **Breadcrumb Navigation**: Demo breadcrumb thay đổi theo URL hiện tại.
7. **404 Not Found**: Demo xử lý route không tồn tại.
8. **Search Params**: Demo tìm kiếm sản phẩm với query parameters.
9. **Protected Routes**: Demo về route được bảo vệ cần quyền truy cập.

---

Dự án này được tạo để minh họa cách sử dụng React Router v6+. 