## 자동화 테스트 실행

```bash
npm tests
```

## 1. TEST : Props로 초기값을 전달할 때, 테스트

- **초깃값** : `7`
- **결과** : `7`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value when set to 7", () => {
  render(<AwesomeCounter initialValue={7} />);
  const count = screen.queryByText(7); // 문자열로 비교하도록
  expect(count).toBeInTheDocument();
});
```

## 2. Props로 초기값을 전달하지 않을 때, 0 출력 테스트

- **초깃값** : `null`
- **결과** : `0`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value when of 0", () => {
  render(<AwesomeCounter />);
  const count = screen.queryByText(0);
  expect(count).toBeInTheDocument();
});
```

## 3. 초깃값이 0일때, add 버튼 클릭 시 1 출력 테스트

- **초깃값** : `0`
- **결과** : `1`
- **테스트** : `PASS`

```tsx
test("it should increment the count by 1 when the add button is clicked", () => {
  render(<AwesomeCounter initialValue={0} />);
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);
  const count = screen.getByText(1);
  expect(count).toBeVisible();
});
```

## 4. 초기값이 1일때, add 버튼 클릭시 2 출력 테스트

- **초깃값** : `1`
- **결과** : `2`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value add is clicked once", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);
  const count = screen.getByText(2);
  expect(count).toBeVisible();
});
```

## 5. 초기값이 1일때, add 버튼 두 번 클릭시 3 출력 테스트

- **초깃값** : `1`
- **결과** : `3`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value add is clicked twice", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});
```

## 6. 초기값이 5일때, remove 버튼 클릭시 4 출력 테스트

- **초깃값** : `5`
- **결과** : `4`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value remove is clicked once", async () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  const count = screen.queryByText(4);
  expect(count).toBeVisible();
});
```

## 7. 초기값이 5일때, remove 버튼 두 번 클릭시 3 출력 테스트

- **초깃값** : `5`
- **결과** : `3`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value remove is clicked twice", async () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});
```

## 8. 초기값이 0일때, remove 버튼 두 번 클릭시 0 출력 테스트

- **초깃값** : `0`
- **결과** : `0`
- **테스트** : `PASS`

```tsx
test("it should not allow a negative number when the initial value is 0 and remove is clicked", async () => {
  render(<AwesomeCounter initialValue={0} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});
```

## 9. 초기값이 2일때, remove 버튼 네 번 클릭시 0 출력 테스트

- **초깃값** : `2`
- **결과** : `0`
- **테스트** : `PASS`

```tsx
test("it should not allow a negative number when the initial value is 0 and remove is clicked", async () => {
  render(<AwesomeCounter initialValue={2} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);

  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});
```
