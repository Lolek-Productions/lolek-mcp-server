"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { createNote, updateNote } from "./actions";
import { useRouter } from "next/navigation";

interface NoteFormProps {
  note?: {
    id: string;
    note: string;
  };
}

export default function EditForm({ note }: NoteFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState(note?.note || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const values = {
      content,
    };

    let result;
    if (note) {
      result = await updateNote(note.id, values);
    } else {
      result = await createNote(values);
    }

    setIsSubmitting(false);

    if (result.success) {
      router.push("/notes");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="content">Note</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your note..."
          className="min-h-[500px] font-mono text-sm"
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/notes")}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : note ? "Update Note" : "Create Note"}
        </Button>
      </div>
    </form>
  );
}