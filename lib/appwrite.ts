import { Client, Account, Databases, Models } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://be.codebits.it/v1')
  .setProject('62f5270045638e2bade1')

export const account = new Account(client);
export const databases = new Databases(client, '62f5274033ce462954bf');
export { client }