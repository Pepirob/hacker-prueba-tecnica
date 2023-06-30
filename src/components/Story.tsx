import useSWR from 'swr'
import { getItemStories } from '../services/getStories'
import { commentsLink, footer, header } from './Story.css'
import { Link } from 'wouter'
import { link } from './Header.css'
import StoryLoader from './StoryLoader'
import { getRelativeTime } from '../utils/getRelativeTime'

function Story ({ id }: { id: number }) {
  const { data, isLoading } = useSWR(`item/${id}`, () => getItemStories(id))

  if (isLoading) {
    return <StoryLoader />
  }

  const { title, url, score, kids, by, time } = data
  let domain = ''

  try {
    domain = new URL(url).hostname.replace('www', '')
  } catch {}

  return (
    <article>
      <header className={header}>
        <Link href={`item/${id}`} className={link}>
          {title}
        </Link>
        <a className={commentsLink} href={url} style={{ color: '#999999' }}>
          ({domain})
        </a>
      </header>
      <footer className={footer}>
        <span>
          {score} points by {by}
        </span>
        <span>
          {getRelativeTime(time)} ago
        </span>
        |
        <Link href={`item/${id}`} className={commentsLink}>
          {kids?.length ?? 0} coments
        </Link>
      </footer>
    </article>
  )
}

export default Story
