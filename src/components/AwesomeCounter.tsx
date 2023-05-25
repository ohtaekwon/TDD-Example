import React, { useState } from "react";

/**
 * 테스트할 컴포넌트
 *
 * case1 : AwesomeCounter일 경우 getByText에서 찾지 못함
 * case2 : Awesome Counter일 경우 통과
 */

interface Props {
  initialValue?: number;
}

const AwesomeCounter = ({ initialValue }: Props) => {
  const [count, setCount] = useState(initialValue ?? 0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const remove = () => {
    setCount((prev) => {
      const result = prev - 1;
      if (result < 0) {
        return 0;
      }
      return result;
    });
  };
  return (
    <div>
      <h1>Awesome Counter</h1>
      <button onClick={remove}>Remove</button>
      <span>{count}</span>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AwesomeCounter;
