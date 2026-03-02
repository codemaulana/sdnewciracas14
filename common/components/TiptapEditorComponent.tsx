"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";

interface TiptapProps {
  onChange: (html: string) => void;
}

// Gunakan export default agar mudah di-import secara dinamis
export default function TiptapEditorComponent({ onChange }: TiptapProps) {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic],
    content: "<p>Mulai ketik artikel Anda di sini...</p>",
    immediatelyRender: false, 
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return <p>Loading toolbar...</p>;

  return (
    <div className="border border-gray-300 rounded overflow-hidden bg-white text-black">
      <div className="bg-gray-100 p-2 border-b flex gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded ${editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-white border"}`}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white border italic"}`}
        >
          I
        </button>
      </div>
      <EditorContent editor={editor} className="p-3 outline-none" />
    </div>
  );
}