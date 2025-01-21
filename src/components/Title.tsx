import { memo } from "react";

const Title = memo(({ text }: { text: string }) => {
  console.log("Title rendered");
  return <h1>{text}</h1>;
});

export default Title;