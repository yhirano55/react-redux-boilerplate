import * as Raven from "raven-js"
import * as React from "react"
import { render } from "react-dom"
import "normalize.css"
import App from "./components/App"

if (process.env.SENTRY_DSN) {
  Raven.config(process.env.SENTRY_DSN).install()
}

render(<App />, document.getElementById("root"))
