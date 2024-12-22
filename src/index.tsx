import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'amis/lib/themes/cxd.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import 'amis-editor-core/lib/style.css'

const rootEl = document.getElementById('root')
if (rootEl) {
  // const root = ReactDOM.createRoot(rootEl)
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  )
}
