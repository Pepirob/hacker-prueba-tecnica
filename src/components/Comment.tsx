import { getItemStories } from '../services/getStories'
import { getRelativeTime } from '../utils/getRelativeTime'
import ListOfComents from './ListOfComents'
import StoryLoader from './StoryLoader'
import useSWR from 'swr'

function Comment ({ id }: { id: number }) {
  const { data, isLoading } = useSWR(`comment/${id}`, () => getItemStories(Number(id)))

  if (isLoading) {
    return <StoryLoader />
  }
  const { by, text, time, kids } = data
  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span>{getRelativeTime(time)}</span>
          </small>
        </summary>
        <p>{text} </p>
      </details>
      {kids?.length > 0 && <ListOfComents ids={kids.slice(0, 10)} />}
    </>
  )
}

export default Comment
