'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export interface Contact {
  id: number
  created_at: string
  email: string | null
  first_name: string | null
  last_name: string | null
  parish_name: string | null
  parish_city: string | null
  parish_state: string | null
  phone: string | null
  role: string | null
  salutation: string | null
  title: string | null
  whole_name: string | null
}

export interface CreateContactData {
  email?: string
  first_name?: string
  last_name?: string
  parish_name?: string
  parish_city?: string
  parish_state?: string
  phone?: string
  role?: string
  salutation?: string
  title?: string
  whole_name?: string
}

export interface UpdateContactData extends CreateContactData {
  id: number
}

export async function getContacts(): Promise<Contact[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching contacts:', error)
    throw new Error('Failed to fetch contacts')
  }
  
  return data || []
}

export async function getContactById(id: number): Promise<Contact | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .eq('id', id)
    .single()
    
  if (error) {
    console.error('Error fetching contact:', error)
    return null
  }
  
  return data
}

export async function createContact(contactData: CreateContactData): Promise<Contact> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select()
    .single()
    
  if (error) {
    console.error('Error creating contact:', error)
    throw new Error('Failed to create contact')
  }
  
  revalidatePath('/contacts')
  return data
}

export async function updateContact(contactData: UpdateContactData): Promise<Contact> {
  const supabase = await createClient()
  
  const { id, ...updateFields } = contactData
  
  const { data, error } = await supabase
    .from('contacts')
    .update(updateFields)
    .eq('id', id)
    .select()
    .single()
    
  if (error) {
    console.error('Error updating contact:', error)
    throw new Error('Failed to update contact')
  }
  
  revalidatePath('/contacts')
  revalidatePath(`/contacts/${id}`)
  return data
}

export async function deleteContact(id: number): Promise<void> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id)
    
  if (error) {
    console.error('Error deleting contact:', error)
    throw new Error('Failed to delete contact')
  }
  
  revalidatePath('/contacts')
}

export async function getContactsByParish(parishName: string): Promise<Contact[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .eq('parish_name', parishName)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching contacts by parish:', error)
    throw new Error('Failed to fetch contacts by parish')
  }
  
  return data || []
}

export async function searchContacts(query: string): Promise<Contact[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,email.ilike.%${query}%,whole_name.ilike.%${query}%,parish_name.ilike.%${query}%`)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error searching contacts:', error)
    throw new Error('Failed to search contacts')
  }
  
  return data || []
}