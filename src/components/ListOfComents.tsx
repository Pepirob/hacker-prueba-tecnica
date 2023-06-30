import Comment from './Comment'
import { commentList } from './Comment.css'

function ListOfComents ({ ids }: { ids: number[] }) {
  return (
    <ul>
      {ids?.map((id: number) => {
        return (
          <li className={commentList} key={id}>
            <Comment id={id} />
          </li>
        )
      })}
    </ul>

  )
}

export default ListOfComents
