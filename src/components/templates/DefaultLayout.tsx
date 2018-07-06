import * as React from "react"
import * as styles from "../../stylesheets/templates/DefaultLayout.css"

type Props = {
  children: any
}

export default function DefaultLayout({ children }: Props) {
  return <div className={styles.container}>{children}</div>
}
