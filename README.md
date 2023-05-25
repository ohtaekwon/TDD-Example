[정리글 링크 바로가기](https://velog.io/@taetae-5/TDD%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A3%BC%EB%8F%84-%EA%B0%9C%EB%B0%9C%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)

## TDD(Test Driven Development)란?

- 테스트 주도 개발은 개발방식 중 하나로 테스트 코드를 먼저 작성하고, 그 테스트를 통과시킬 수 있는 최소한의 코드로 개발을 진행하는 것을 말한다.
- TDD의 궁극적인 목표는 `Clean Code that works` 즉, 작동하는 클린코드를 말한다.
- TDD의 다른말로는, `Test First Programming` 으로, 테스트를 먼저 작동하는 방식

**\*테스트**란?

> 프로그램을 실행하여 오류와 결함을 검증하고 애플리케이션이 요구사항에 맞게 동작하는지 검증하는 절차를 의미한다.

## Why you need TDD

- `기술 부채의 증가`를 막기 위해서 이다. 부채를 미루다가 증가할 수록, 코드를 수정하는 것보다 오히려 새로 구현하는 것이 더 낫게 될 수 있기 떄문이다.

**\*기술부채**란?

> 기술적으로 해결되어야 할 문제들을 뒤로 미루고, 비지니스 문제를 해곃하는 시점을 앞당기는 것

## TDD CYCLE

![TDD CYCLE](./assets/tdd.png)

- 처음에 실패한 뒤, 통과를 시킨다.
- 통과된 코드에서 중복을 제거하고
- 개선된 코드의 사이클을 둔다.

## How to make Testable Code

- 덩어리가 커지거나 상태관리에 대해서 복잡해질 경우 `Testable Code` 즉, 테스트가 가능한 코드를 구현하는 것은 어려움.
- 따라서, `관심사의 분리(Separation of Concerns)`가 중요하다.

**\*관심사 분리란?**

> 개별 요소들이 자신이 관심받고 있는 곳에만 집중하여 관심을 기울이는 SW 엔지니어링 기법이다.

## TDD를 공부하며 느낀점

- 단순 겉핥기식으로 기본적인 기능단위의 TDD를 구현하였으나, 과연 이게 복잡해지는 기능 단위에 대해서는 어떻게 구현해야할지 어려움이 생길 것 같다고 판단이 된다.
- 또한, 단순히 구현하기 전에 테스트 작성을 먼저 진행하면서 초기 시간적인 비용이 더 많이 드는 것은 어쩔수 없다.
- 그럼에도 불구하고 장점이라면, 잘 구현하면 오류를 조기에 발견하는 것과 관심사분리에 더 집중하면서 리팩토링에 대해 더 많이 생각해볼 수 있을 것 같다.

---

## Count 증감 버튼에 따라는 숫자 출력 테스트

### 자동화 테스트 실행

```bash
npm tests
```

### 1. TEST : Props로 초기값을 전달할 때, 테스트

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

### 2. Props로 초기값을 전달하지 않을 때, 0 출력 테스트

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

### 3. 초깃값이 0일때, add 버튼 클릭 시 1 출력 테스트

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

### 4. 초기값이 1일때, add 버튼 클릭시 2 출력 테스트

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

### 5. 초기값이 1일때, add 버튼 두 번 클릭시 3 출력 테스트

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

### 6. 초기값이 5일때, remove 버튼 클릭시 4 출력 테스트

- **초깃값** : `5`
- **결과** : `4`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value remove is clicked once", () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  const count = screen.queryByText(4);
  expect(count).toBeVisible();
});
```

### 7. 초기값이 5일때, remove 버튼 두 번 클릭시 3 출력 테스트

- **초깃값** : `5`
- **결과** : `3`
- **테스트** : `PASS`

```tsx
test("it should have the correct initial value remove is clicked twice", () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  fireEvent.click(removeButton);
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});
```

### 8. 초기값이 0일때, remove 버튼 두 번 클릭시 0 출력 테스트

- **초깃값** : `0`
- **결과** : `0`
- **테스트** : `PASS`

```tsx
test("it should not allow a negative number when the initial value is 0 and remove is clicked", () => {
  render(<AwesomeCounter initialValue={0} />);
  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});
```

### 9. 초기값이 2일때, remove 버튼 네 번 클릭시 0 출력 테스트

- **초깃값** : `2`
- **결과** : `0`
- **테스트** : `PASS`

```tsx
test("it should not allow a negative number when the initial value is 0 and remove is clicked", () => {
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
