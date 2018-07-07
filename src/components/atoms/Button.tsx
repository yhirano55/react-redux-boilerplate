import * as React from "react"
import * as styles from "./Button.css"

type Props = {
  text: string
  onClick: (event: any) => void
}

export default function Button({ text, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}
