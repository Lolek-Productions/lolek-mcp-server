import { MainHeader } from "@/components/main-header";
import { PageContainer } from "@/components/page-container";
import NoteForm from "../NoteForm";
import { fetchNoteById } from "../actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

export default async function EditNotePage({ params }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  const noteResult = await fetchNoteById(params.noteId);
  
  if (!noteResult.success || !noteResult.data) {
    notFound();
  }

  const note = noteResult.data;

  return (
    <>
      <MainHeader 
        breadcrumbs={[
          { label: "Notes", href: "/notes" },
          { label: "Edit Note" }
        ]} 
      />
      <PageContainer 
        title="Edit Note" 
        description="Update your note"
        maxWidth="3xl"
      >
        <NoteForm note={note} />
      </PageContainer>
    </>
  );
}