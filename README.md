# Login Form With TDD

## 자동화 테스트 실행

```bash
npm test
```

## 1. Input과 Button UI TEST

```tsx
it("username, password, submit의 UI가 있습니다.", () => {
  render(<LoginForm />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  expect(usernameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
```

## 2. 제출하기(onSubmit)실행에 따른 상태 출력 테스트

```tsx
it("제출할때, 유저 정보를 넘겨야합니다.", () => {
  const submit = jest.fn();
  render(<LoginForm submit={submit} />);

  const usernameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  userEvent.type(usernameField, "mambo");
  userEvent.type(passwordField, "soosecure");
  userEvent.click(submitButton); // submit 버튼 클릭 이벤트 실행

  // 기대 결과
  expect(submit).toHaveBeenCalledWith({
    username: "mambo",
    password: "soosecure",
  });
});
```

## 결과

![결과 이미지](/assets/result.png)
