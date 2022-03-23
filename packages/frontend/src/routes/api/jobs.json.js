import 'dotenv/config'
import axios from 'axios'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post() {
  const { API_URL } = process.env

  const { data: { data } } = await axios.request({
    method: 'POST',
    url: API_URL,
    data: {
      query: `
        {
          jobOffers(where: { status: { equals: "published" } }, orderBy: { createdAt: desc }) {
            id
            company {
              name
              logo {
                url
              }
            }
            role
            seniority
            mainSkills {
              name
            }
            secondarySkills {
              name
            }
            salary,
            originalUrl,
            createdAt
          }
        }
      `
    }
  })

  return {
    body: data.jobOffers
  }
}
