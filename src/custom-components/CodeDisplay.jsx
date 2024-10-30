import "prismjs/themes/prism.css";
import { useEffect, useState } from "react";
import Prism from "prismjs";

function CodeDisplay({ codeString, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [codeString]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative bg-card text-card-foreground p-3 rounded-md overflow-auto h-full flex justify-center items-end border border-border">
      <button
        onClick={handleCopy}
        className="absolute top-1 right-1 text-sm text-primary-foreground bg-primary hover:bg-accent transition-all duration-200 rounded px-2 py-1"
      >
        {copied ? "✔ Copied" : "Copy"}
      </button>

      <pre className="overflow-auto h-[85%] w-full rounded-t-xl">
        <code className={`language-${language}`}>{codeString}</code>
      </pre>
    </div>
  );
}

export default CodeDisplay;