import { MainHeader } from "@/components/main-header";
import { PageContainer } from "@/components/page-container";
import NoteForm from "../NoteForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function CreateNotePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <MainHeader 
        breadcrumbs={[
          { label: "Notes", href: "/notes" },
          { label: "Create" }
        ]} 
      />
      <PageContainer 
        title="Create Note" 
        description="Start a new note"
        maxWidth="3xl"
      >
        <NoteForm />
      </PageContainer>
    </>
  );
}