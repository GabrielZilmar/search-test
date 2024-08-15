"use client";

import { Input } from "@cialdnb/ui";
import { useCallback, useEffect, useState } from "react";

const SearchHighlight: React.FC = () => {
  const [textToHighlight, setTextToHighlight] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextToHighlight(event.target.value);
  };

  const highlightText = useCallback(
    (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
        const parent = node.parentNode;
        const text = node.nodeValue;
        const isNextStaticNode = text.includes("self.__next");
        if (isNextStaticNode) {
          return;
        }

        const regex = new RegExp(`(${textToHighlight})`, "gi");
        if (textToHighlight && regex.test(text)) {
          const newNode = document.createElement("span");
          newNode.className = "bg-yellow-400";
          newNode.appendChild(document.createTextNode(text));

          parent?.insertBefore(newNode, node);
          parent?.removeChild(node);
        }

        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach((childNode) => highlightText(childNode));
      }
    },
    [textToHighlight],
  );

  useEffect(() => {
    // Clear existing highlights
    const existingHighlights = document.querySelectorAll("span.bg-yellow-400");
    existingHighlights.forEach((highlight) => {
      const parent = highlight.parentNode;
      parent?.replaceChild(
        document.createTextNode(highlight.textContent || ""),
        highlight,
      );
    });

    document.body.childNodes.forEach((node) => highlightText(node));
  }, [textToHighlight, highlightText]);

  return (
    <div>
      <Input
        type="text"
        placeholder="Search Highlight..."
        onChange={handleTextChange}
      />
    </div>
  );
};

export default SearchHighlight;
