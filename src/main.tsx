import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Raven from "raven-js"
import "normalize.css"
import App from "./components/App"

if (process.env.SENTRY_DSN) Raven.config(process.env.SENTRY_DSN).install()
ReactDOM.render(<App />, document.getElementById("root"))
