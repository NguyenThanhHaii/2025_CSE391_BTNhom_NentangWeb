# React Practice Playground 🧩

Đây là một dự án thực hành ReactJS sử dụng Vite và TailwindCSS. Dự án bao gồm các bài tập về component dạng class và function, quản lý state/props, cũng như thao tác với danh sách và hiển thị dữ liệu.

## 🚀 Tính năng

### 🔢 Ứng dụng Counter

- **CounterClass.jsx**: Bộ đếm sử dụng Class Component. Cho phép tăng, giảm và đặt lại giá trị.
- **CounterFunction.jsx**: Cùng chức năng như trên nhưng sử dụng Function Component với React Hooks.

### ✅ Ứng dụng Todo List

- **NewTask.jsx**: Tạo công việc mới.
- **CanceledTask.jsx**: Hiển thị danh sách các công việc đã hủy.
- **FinishedTask.jsx**: Hiển thị danh sách các công việc đã hoàn thành.
- **InputForm.jsx**: Form nhập công việc mới.
- **TodoList.jsx**: Kết hợp toàn bộ các component thành ứng dụng quản lý công việc hoàn chỉnh.

Chức năng:

- Thêm công việc mới
- Hiển thị danh sách công việc đang thực hiện, đã hoàn thành, và đã hủy
- Đánh dấu hoàn thành/xoá công việc

### 🛒 Ứng dụng Product List

- **ProductList.jsx**: Hiển thị danh sách sản phẩm từ `data.js`
- **ProductCard.jsx**: Component con dùng để hiển thị từng sản phẩm một cách trực quan

Chức năng:

- Hiển thị danh sách sản phẩm từ file dữ liệu tĩnh `data.js`
- Giao diện sản phẩm được tách riêng thành component `ProductCard`

## 🧑‍💻 Công nghệ sử dụng

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Giao diện**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Môi trường**: Node.js v20+

## ⚙️ Hướng dẫn cài đặt và chạy

```bash
# Clone dự án
git clone https://github.com/NguyenThanhHaii/2025_CSE391_BTNhom_NentangWeb.git
cd 2025_CSE391_BTNhom_NentangWeb

# Cài đặt dependencies
npm install

# Chạy ứng dụng
npm run dev
```

Sau đó mở trình duyệt tại [http://localhost:5173](http://localhost:5173) để xem ứng dụng.

## 📁 Cấu trúc thư mục

```
├── public/
├── src/
│   ├── components/
│   │   ├── CanceledTask.jsx
│   │   ├── FinishedTask.jsx
│   │   ├── InputForm.jsx
│   │   ├── NewTask.jsx
│   │   ├── ProductCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── CounterClass.jsx
│   ├── CounterFunction.jsx
│   ├── TodoList.jsx
│   ├── ProductList.jsx
│   ├── data.js
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
```

## 👨‍👩‍👧‍👦 Thông tin nhóm

- **Nhóm 6**: Nhiệm vụ 2: _Component Paradigms: Functional vs Class & Props/State_
- **Thành viên**:
  - Nguyễn Thanh Hải
  - Mai Thị Thu Hương
  - Nguyễn Ngọc Tiến
- **Giảng viên hướng dẫn**: Thầy Tạ Chí Hiếu

## 📜 License

Dự án phục vụ mục đích học tập, không sử dụng cho mục đích thương mại.
