import { MainHeader } from "@/components/main-header";
import { PageContainer } from "@/components/page-container";
import NotesTable from "./NotesTable";
import { fetchNotes } from "./actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";

export default async function ListPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  const notesResult = await fetchNotes();
  const notes = notesResult.success ? notesResult.data : [];

  return (
    <>
      <MainHeader breadcrumbs={[{ label: "Notes" }]} />
      <PageContainer 
        title="Notes" 
        description="Capture and organize your thoughts"
        maxWidth="5xl"
      >
        <Suspense fallback={<div>Loading notes...</div>}>
          <NotesTable notes={notes} />
        </Suspense>
      </PageContainer>
    </>
  );
}