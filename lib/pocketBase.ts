import PocketBase, { Record } from 'pocketBase';

const pocketBase = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);

export interface PocketBaseRecord extends Record {}

export default pocketBase;
