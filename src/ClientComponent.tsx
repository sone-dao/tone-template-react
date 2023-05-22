'use client'

import { useState } from 'react'

interface IClientComponentProps {
  defaultText?: string
}

export default function ClientComponent({
  defaultText = 'default',
}: IClientComponentProps) {
  const [text, setText] = useState<string>(defaultText)

  return (
    <div>
      <p onClick={() => setText('changed!')}>{text}</p>
    </div>
  )
}
