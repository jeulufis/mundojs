"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ children }: any) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
