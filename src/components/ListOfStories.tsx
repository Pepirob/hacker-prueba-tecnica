import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../services/getStories'
import Story from './Story'
import { list } from './ListOfStories.css'
import StoryLoader from './StoryLoader'
import { useEffect, useRef } from 'react'

function ListOfStories () {
  const { data, isLoading, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 10)
    }
  )

  const chivatoRef = useRef<HTMLSpanElement>(null)

  const stories = data?.flat()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setSize((prevsize) => prevsize + 1)
        }
      },
      {
        rootMargin: '100px'
      }
    )

    if (chivatoRef.current == null) { return }

    observer.observe(chivatoRef.current)

    return () => {
      observer.disconnect()
    }
  }, [isLoading, setSize])

  return (
    <>
      <ul>
        {isLoading && <StoryLoader />}
        {stories?.map((id: number) => {
          return (
            <li className={list} key={id}>
              <Story id={id} />
            </li>
          )
        })}
      </ul>
      {!isLoading && <span ref={chivatoRef}>.</span>}
      {/* <button
        onClick={() => {
          setSize(size + 1)
        }}
      >
        Load more
      </button> */}
    </>
  )
}

export default ListOfStories
