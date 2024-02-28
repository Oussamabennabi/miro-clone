import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import React from 'react'
interface InfoProps {
  boardId:Id<"boards">
}
const Info = ({boardId}:InfoProps) => {
  const board = useQuery(api.board.getBoardById,{
    id:boardId
  })
  return (
    <div>Info</div>
  )
}

export default Info