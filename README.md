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
- **Giao diện người dùng chuyên nghiệp** với:
  - Thanh điều hướng (Navbar)
  - Trang chủ với sản phẩm nổi bật
  - Trang giới thiệu
  - Trang liên hệ với form
  - Trang chi tiết sản phẩm (với tham số động)
  - Footer

## Cấu trúc dự án
```
src/
  ├── components/
  │   ├── Footer.js
  │   └── Navbar.js
  ├── pages/
  │   ├── AboutPage.js
  │   ├── ContactPage.js
  │   ├── HomePage.js
  │   └── ProductDetailPage.js
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

## Tài nguyên học tập
- [React Router v6 Official Documentation](https://reactrouter.com/en/main)
- [React Router v6 Tutorial](https://reactrouter.com/en/main/start/tutorial)

---

Dự án này được tạo để minh họa cách sử dụng React Router v6+. 