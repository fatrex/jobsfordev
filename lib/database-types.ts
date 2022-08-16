import type { Models } from 'appwrite'

export interface Job extends Models.Document {
  role: string
  seniority: 'internship' | 'fullstack' | 'backend' | 'frontend'
  companyId: string
}

export interface Company extends Models.Document {
  name: string
  website?: string
}
