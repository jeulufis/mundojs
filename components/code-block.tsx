"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";



const CodeBlock = ({ children }: any) => {

  return (
    <SyntaxHighlighter language="javascript"  style={stackoverflowDark}>
      {children}
    </SyntaxHighlighter>

  );
};

export default CodeBlock;
