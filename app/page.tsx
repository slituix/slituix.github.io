// app/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen w-full p-8 bg-[#161618] flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-white">Next.js Docs-style Code Example</h1>
        {/* Example usage of code block (see below) */}
        <pre>
          <code className="language-tsx">{`
          // filename: app/page.tsx
          export default function Page() {
            return <h1>Hello Next.js!</h1>
          }
          `}</code>
        </pre>
      </div>
    </main>
  );
}
