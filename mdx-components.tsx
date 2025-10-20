import CodeBlock from './components/CodeBlock';

export function useMDXComponents(components) {
  return {
    pre: (props) => {
      const child = props.children[0];
      if (child && typeof child === "object" && child.props) {
        const { className = "", children: code = "", ...rest } = child.props;
        const lang = className.replace("language-", "") || "tsx";
        // Parse filename from a special comment, e.g. // filename: app/page.tsx
        const filenameMatch = typeof code === "string" ? code.match(/^s*//s*filename:s*(.+)$/m) : null;
        const filename = filenameMatch ? filenameMatch[1] : undefined;
        return (
          <CodeBlock
            code={typeof code === "string" ? code.replace(/^s*//s*filename:.*$
?/m, "") : ""}
            lang={lang}
            filename={filename}
            {...rest}
          />
        );
      }
      return <pre {...props} />;
    },
    ...components,
  };
}
