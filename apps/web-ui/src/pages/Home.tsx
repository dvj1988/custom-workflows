import React, { useMemo } from "react";

const a = 10;
const b = 5;

const HomePage = () => {
  // Test nested ternary operator eslint
  const text = useMemo(() => {
    return a >= 10
      ? "Hello"
      : b <= 5
      ? "World"
      : a > b
      ? "We"
      : b > a
      ? "sdfd"
      : "sdfsdfdsfsdfd";
  }, []);

  return <div>{text}</div>;
};

export default HomePage;
