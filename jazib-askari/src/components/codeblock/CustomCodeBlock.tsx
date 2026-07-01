import { CodeBlock } from "react-code-block";

interface CodeBlockDemoProps {
  code: string;
  language: string;
}

const myCustomTheme = {
  plain: { color: "#E2E8F0", backgroundColor: "background.paper" },
  styles: [
    { types: ["keyword"], style: { color: "#b8d38d" } },
    { types: ["string"], style: { color: "#8fdcd0" } },
    { types: ["comment"], style: { color: "#7496d1" } },
    { types: ["function", "class-name"], style: { color: "#5ccfe6" } },
    { types: ["number", "boolean", "constant"], style: { color: "#f19ab2" } },
    { types: ["punctuation"], style: { color: "#7496d1" } },
    { types: ["tag"], style: { color: "#ffd580" } },
    { types: ["attr-name"], style: { color: "#b8d38d" } },
    { types: ["attr-value"], style: { color: "#8fdcd0" } },
    { types: ["operator"], style: { color: "#f19ab2" } },
    { types: ["interpolation"], style: { color: "#ffd580" } },
    { types: ["template-string"], style: { color: "#8fdcd0" } },
  ],
};

export default function CodeBlockDemo({ code, language }: CodeBlockDemoProps) {
  return (
    <div>
      <CodeBlock code={code} language={language} theme={myCustomTheme}>
        <CodeBlock.Code>
          <div style={{ display: "flex" }}>
            <CodeBlock.LineNumber
              style={{
                width: "40px",
                paddingRight: "20px",
                textAlign: "right",
                color: "#6b7280",
                userSelect: "none",
              }}
            />
            <span style={{ display: "inline-block" }}>
              <CodeBlock.Token />
            </span>
          </div>
        </CodeBlock.Code>
      </CodeBlock>
    </div>
  );
}
