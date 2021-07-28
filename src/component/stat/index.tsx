import React, { ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode
  restprops: any
}

export default function Statuss({ children, ...restprops }: Props): ReactElement {
  return <div {...restprops}>{children}</div>
}

Statuss.Img = function StatusImg({ children, ...restprops }: Props): ReactElement {
  return <div {...restprops}>{children}</div>
}
