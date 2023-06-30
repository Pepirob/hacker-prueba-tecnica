import ListOfComents from '../components/ListOfComents'
import useSWR from 'swr'
import { getItemStories } from '../services/getStories'
import StoryLoader from '../components/StoryLoader'
import { useEffect } from 'react'
function DetailsPage (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { data, isLoading } = useSWR(`comments/${id}`, () => getItemStories(Number(id)))
  const { title }: { title: string } = data ?? {}

  useEffect(() => {
    document.title = `Hacker News - ${title}`
  }, [title])
  return (
    <>
      {isLoading ?? <StoryLoader />}
      <ListOfComents ids={data?.kids?.slice(0, 10)} />
    </>
  )
}

export default DetailsPage
