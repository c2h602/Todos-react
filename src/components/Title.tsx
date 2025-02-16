import { memo } from "react";

const Title = memo(({ text }: { text: string }) => {
  return <h1>{text}</h1>;
});

export default Title;