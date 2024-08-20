"use client";

import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight, stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";



const CodeBlock = ({ children }: any) => {
  const { theme } = useTheme();

  return (
    <SyntaxHighlighter language="javascript"  style={theme === 'dark' ? stackoverflowDark : stackoverflowLight}>
      {children}
    </SyntaxHighlighter>

  );
};

export default CodeBlock;
