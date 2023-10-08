"use client";

export const ClickMe = ({ text }: { text: string }) => {
  const handleClick = () => {};

  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};
