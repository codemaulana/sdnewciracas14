"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { useState, useEffect } from "react";

export default function EditKontenArticle({ values }: { values: string }) {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic],
    content: values || "<p>Mulai ketik artikel Anda di sini...</p>",
    immediatelyRender: false,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    setContent(values);
  }, [values]);

  return (
    <>
      <div className="toolbar flex gap-2 mb-2">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="px-2 py-1 border rounded hover:bg-gray-200 font-bold"
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="px-2 py-1 border rounded hover:bg-gray-200 italic"
        >
          Italic
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="border border-gray-300 p-2 rounded min-h-[200px]"
      />
      <input type="hidden" name="content" value={content} />
    </>
  );
}
