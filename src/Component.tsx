import { useState } from 'react'

type ComponentProps {
  defaultText?: string
}

export default function Client({
  defaultText = 'Sup, universe?',
}: ComponentProps) {
  const [text, setText] = useState<string>(defaultText)

  return (
    <div>
      <p onClick={() => setText('Nothing much.')}>{text}</p>
    </div>
  )
}
