import { atom, action, onMount, task } from 'nanostores'
import { databases } from '../../lib/appwrite'
import type { Job } from '../../lib/database-types'
import type { Models } from 'appwrite'

export const companies = atom<Job[]>([])

export const fetch = action(jobs, 'fetch', async (store) => {
  const response: Models.DocumentList<Job> = await databases.listDocuments(
    '62f60bd9d702ddd89ea6',
  )
  store.set(response.documents)
})
