import { PocketBaseRecord } from '@/lib/pocketBase';

export interface ExempleTableRecord extends PocketBaseRecord {
  name: string;
  email: string;
  subject: string;
  content: string;
}
