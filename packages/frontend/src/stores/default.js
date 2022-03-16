import { readable } from 'svelte/store'

const { VITE_MATOMO_SITE_ID } = import.meta.env
export const matomoSiteId = readable(VITE_MATOMO_SITE_ID)