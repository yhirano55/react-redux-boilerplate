import * as React from "react"
import { connect } from "react-redux"
import * as styles from "./Counter.css"
import Button from "../../atoms/Button"
import DefaultLayout from "../../templates/DefaultLayout"

type Props = {
  value: number
  add(n: number): void
  increment(): void
}

export default function Counter(props: Props) {
  const { value, add, increment } = props
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <h1 className={styles.title}>Counter</h1>
        <span className={styles.value}>value: {props.value}</span>
        <div className={styles.buttons}>
          <Button
            text="add:3"
            onClick={(ev: any) => {
              add(3)
            }}
          />
          &nbsp;
          <Button
            text="increment"
            onClick={(ev: any) => {
              increment()
            }}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}
