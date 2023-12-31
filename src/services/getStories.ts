export const getTopStories = async (page: number, limit: number) => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')

  const json = await response.json()
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const ids = json.slice(startIndex, endIndex)

  return ids
}

export const getItemStories = async (id: number) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return await response.json()
}
