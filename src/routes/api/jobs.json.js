import 'dotenv/config'
import axios from 'axios'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post() {
  const { NOTION_SECRET_KEY, NOTION_DATABASE_ID } = process.env

  const { data } = await axios.request({
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    data: JSON.stringify(
      {
      filter: {
        and: [
          {
            property: 'published',
            checkbox: {
              equals: true
            }
          }
        ]
      }
    }
    ),
    headers: {
      'Authorization': `Bearer ${NOTION_SECRET_KEY}`,
      'Notion-Version': '2021-08-16',
      'Content-Type': 'application/json'
    }
  })

  return {
    body: data
  }
}
