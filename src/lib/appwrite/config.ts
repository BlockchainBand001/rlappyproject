import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67aba27a000030c0299b');

export const account = new Account(client);
export const databases = new Databases(client);

export const COLLECTION_ID_LAPTOPS = 'laptops';
export const DATABASE_ID = 'default';

export { client };
