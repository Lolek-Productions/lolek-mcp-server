"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Trash2, Search, FileText } from "lucide-react";
import { deleteNote } from "./actions";
import { useNotify } from "@/lib/toast-utils";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ListTable({ notes, onUpdate }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const { handleResponse, error } = useNotify();
  const router = useRouter();

  const filteredNotes = useMemo(() => {
    let filtered = notes;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(note => 
        (note.note || "").toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [notes, searchTerm]);

  const openDeleteDialog = (noteId) => {
    setNoteToDelete(noteId);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!noteToDelete) return;
    
    setIsDeleting(true);
    
    try {
      const result = await deleteNote(noteToDelete);
      handleResponse(result, { 
        successTitle: "Note Deleted", 
        errorTitle: "Delete Failed" 
      });
      
      if (result.success) {
        // If onUpdate is provided, use it (for custom refresh logic)
        if (onUpdate) {
          onUpdate();
        } else {
          // Otherwise refresh the page to get fresh data
          router.refresh();
        }
      }
    } catch (err) {
      error("Failed to delete note. Please try again.");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setNoteToDelete(null);
    }
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const truncateContent = (content, maxLength = 100) => {
    if (!content || content.length <= maxLength) return content || "";
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button asChild size="sm">
            <Link href="/notes/create">
              <FileText className="h-4 w-4 mr-2" />
              New Note
            </Link>
          </Button>
        </div>
      </div>

      {/* Notes Grid */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            {searchTerm ? "No notes found matching your search." : "No notes yet. Create your first note!"}
          </p>
          {!searchTerm && (
            <Button asChild className="mt-4">
              <Link href="/notes/create">Create Note</Link>
            </Button>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="relative group border rounded-lg p-4 hover:shadow-md transition-shadow bg-card"
            >
              {/* Note content */}
              <Link href={`/notes/${note.id}`} className="block space-y-2">
                <p className="text-sm line-clamp-4 pr-8">
                  {truncateContent(note.note, 200)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(note.created_at)}
                </p>
              </Link>
              
              {/* Action buttons */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      openDeleteDialog(note.id);
                    }}
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    
      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Note</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this note? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}