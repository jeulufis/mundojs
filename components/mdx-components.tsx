import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import CodeBlock from "./code-block"

const components = {
  Image,
  CodeBlock
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
