### Component Button

- Khi xây dựng một Component mới mở rộng của HTML phải đảm bảo 2 yếu tố:
  - Sử dụng được giống như một thẻ HTML thông thường
  - Có thêm nhiều tính năng mới mà HTML thường không có

```jsx
// HTML Thường
<button type="submit">Nội dung ở giữa</button>
<button type="submit" className="custom">Nội dung ở giữa</button>
<button onClick={() => console.log('clicked me!')}>Nội dung ở giữa</button>

// Component Button
<Button>Nội dung ở giữa</Button>
<Button className="custom">Nội dung ở giữa</Button>
<Button onClick={() => console.log('clickd me!')}>Nội dung ở giữa</Button>
<Button type="default">Nội dung ở giữa</Button>
<Button type="category">Nội dung ở giữa</Button>
<Button type="primary">Nội dung ở giữa</Button>
<Button type="primary" size="large">Nội dung ở giữa</Button>
<Button type="primary" htmlType="submit">Nội dung ở giữa</Button>
<Button type="primary" htmlType="submit" loading={true}>Nội dung ở giữa</Button>
```

- btn btn-default
- btn btn-category
- btn btn-primary btn-size-large


```javascript
const objProps = {
  name: 'hello',
  age: 30,
  title: 'Toi la tieu de'
}

<Button name={objProps.name} age={objProps.age} title={objProps.title} />
// Tương Đương
<Button {...objProps} />
```

### Component MainTitle

```jsx
// Không có Button
<div className="main-title spacing">
  <h2>Title sau nay co the thay doi duoc</h2>
</div>

// Có Button
<div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
  <h2>Popular Articles</h2>
  <a href="/" class="btn btn-default">View More</a>
</div>
```

### Component Input

```jsx
<div class="form-control">
  <label for="">Username</label>
  <input type="text" placeholder="Enter Username ...">
</div>

<div class="form-control">
  <label for="">Password</label>
  <i class="toggle-password ion-eye"></i>
  <input type="password" placeholder="Enter Password ...">
</div>
```