import React from "react";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10)); // e.target.value 의 타입은 문자열이기 때문에 변환 필요
  };
}
