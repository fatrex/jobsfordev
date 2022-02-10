import { writable } from "svelte/store"

export const filteredJobs = writable([])
export const originalJobs = writable([])