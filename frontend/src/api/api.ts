import instance from './axios';
import { Contact } from './model/contact';

export async function getContacts(): Promise<Contact[]> {
  const result = await instance.get('');
  return result.data;
}

export async function getContact(id: number): Promise<Contact> {
  const result = await instance.get(`${id}`);
  return result.data;
}

export function createContact(data: any) {
  return instance.post('', data);
}
