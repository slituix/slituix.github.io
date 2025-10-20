'use client'
import { useState, useEffect } from "react";
import * as shiki from "shiki";

// Simple SVG icons for filetype (expand for all types as needed)
const FileIcons: Record<string, JSX.Element> = {
  tsx: (<svg width="16" height="16" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#3178c6"/><text x="8" y="23" fontSize="12" fill="#fff">TSX</text></svg>),
  jsx: (<svg width="16" height="16" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#f7df1e"/><text x="8" y="23" fontSize="12" fill="#222">JSX</text></svg>),
  // add more as desired...
};

export default function CodeBlock({ code, lang = "tsx", filename, theme = "github-dark" }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    async function highlight() {
      const highlighter = await shiki.getHighlighter({ theme });
      setHtml(highlighter.codeToHtml(code, { lang }));
    }
    highlight();
  }, [code, lang, theme]);

  return (
    <div className="my-6 border rounded-md bg-[#161618] shadow">
      {/* Header bar matching Next.js docs */}
      <div className="flex items-center px-4 py-2 border-b border-[#232325] bg-[#232325] rounded-t-md">
        {filename && (
          <div className="flex items-center space-x-2">
            {FileIcons[lang] || null}
            <span className="text-xs font-mono text-zinc-200 bg-[#232325] px-2 py-0.5 rounded">
              {filename}
            </span>
          </div>
        )}
        <span className="ml-auto text-xs text-zinc-400 uppercase">{lang}</span>
        {/* Copy button */}
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="ml-3 text-xs text-zinc-300 px-2 py-1 rounded hover:bg-zinc-700"
        >
          Copy
        </button>
      </div>
      {/* Code block area */}
      <div className="p-4 overflow-x-auto rounded-b-md text-sm"
        style={{ fontFamily: 'var(--font-mono)' }}
        dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
