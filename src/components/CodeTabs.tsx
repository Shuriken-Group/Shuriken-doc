import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Additional required imports for C++
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

interface TabContent {
  lang: string;
  content: string;
}

interface CodeTabsProps {
  tabs: TabContent[];
}

const cleanContent = (content: string): string => {
  // Remove everything between and including --- markers
  const withoutFrontmatter = content.replace(/---[\s\S]*?---\n/, '');
  // Remove the ```language and closing ``` markers
  return withoutFrontmatter.replace(/```[a-z]*\n/, '').replace(/```$/, '').trim();
};

export default function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setMounted] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Load Prism languages
  const loadLanguages = async () => {
    if (typeof window === 'undefined') return;

    try {
      // Note: c-like and c are prerequisites for cpp
      await Promise.all([
        import("prismjs/components/prism-rust"),
        import("prismjs/components/prism-python"),
        import("prismjs/components/prism-clike"),
        import("prismjs/components/prism-c"),
        import("prismjs/components/prism-cpp")
      ]);
    } catch (error) {
      console.error("Error loading Prism languages:", error);
    }
  };

  useEffect(() => {
    loadLanguages().then(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (mounted && codeRef.current) {
      // Remove previous highlighting
      codeRef.current.className = `language-${tabs[activeTab].lang}`;
      
      // Apply new highlighting
      Prism.highlightElement(codeRef.current);
    }
  }, [activeTab, mounted, tabs]);

  if (!mounted) {
    return (
      <div className="w-full h-32 animate-pulse bg-gray-200 rounded-lg dark:bg-gray-700" />
    );
  }

  return (
    <div className="w-full border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
        {tabs.map((tab, index) => (
          <button
            key={`${tab.lang}-${index}`}
            className={`px-4 py-2 text-sm font-medium first:ml-0 transition-colors duration-200 ${
              activeTab === index
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="p-4 bg-gray-900">
        <pre className="overflow-x-auto">
          <code 
            ref={codeRef}
            className={`language-${tabs[activeTab].lang}`}
          >
            {cleanContent(tabs[activeTab].content)}
          </code>
        </pre>
      </div>
    </div>
  );
}
