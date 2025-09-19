"use client";

import { useState } from "react";

interface Props {
  onUploaded: (id: string) => void;
}

export default function FileUpload({ onUploaded }: Props) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fileInput = e.currentTarget.elements.namedItem("file") as HTMLInputElement;
    if (!fileInput?.files?.[0]) return;

    const formData = new FormData();
    formData.append("file", fileInput.files[0]); // 👈 must match backend multer field

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const text = await res.text(); // capture error response
        throw new Error(`Upload failed: ${res.status} - ${text}`);
      }

      const data = await res.json();
      if (data?.id) {
        console.log("✅ Uploaded PDF, fileId:", data.id);
        onUploaded(data.id);
      } else {
        alert("Upload failed: no id returned");
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("Error uploading file. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleUpload}
      className="flex flex-col items-center space-y-4"
    >
      <input type="file" name="file" accept="application/pdf" required />
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload PDF"}
      </button>
    </form>
  );
}
