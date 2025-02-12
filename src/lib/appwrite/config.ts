import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setProject('67aba27a000030c0299b'); // Replace with your Appwrite project ID

export const account = new Account(client);
export const databases = new Databases(client);

export const COLLECTION_ID_LAPTOPS = 'laptops';
export const DATABASE_ID = 'default';

export { client };
