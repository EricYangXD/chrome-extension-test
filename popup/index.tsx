import { useEffect, useId, useState } from "react"
import { Button } from "antd"

import { Container } from "~styles"

function IndexPopup() {
  const [data, setData] = useState("")

  useEffect(() => {}, [])

  const parseJWTWebsite = () => {
    chrome.tabs.create({
      url: "https://jwt.io/"
    })
  }
  const openPlasmoDoc = () => {
    chrome.tabs.create({
      url: "https://docs.plasmo.com"
    })
  }

  const goToTop = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting?.executeScript({
        target: { tabId: tabs[0].id },
        function: scrollToTop
      })
    })
  }

  const goToBottom = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting?.executeScript({
        target: { tabId: tabs[0].id },
        function: scrollToBottom
      })
    })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openNewTab = () => {
    chrome.tabs.create({
      url: "./tabs/delta-flyer.html"
    })
  }

  const iframeMount = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const { id } = tabs[0]
      chrome.scripting.executeScript({
        target: { tabId: id },
        func: () => {
          const iframe = document.createElement("iframe")
          iframe.src = chrome.runtime.getURL("/tabs/delta-flyer.html")
          iframe.name = "delta-flyer"
          document.body.appendChild(iframe)
        }
      })
    })
  }

  return (
    <Container>
      <div className="text title">
        自动调整Jenkins页面左侧边栏宽度，使其能显示完整版本号等信息
      </div>
      <div className="text clickable" onClick={parseJWTWebsite}>
        解析JSON Web Token（JWT）
      </div>
      <div className="text clickable" onClick={goToTop}>
        滚动到当前页面顶部
      </div>
      <div className="text clickable" onClick={goToBottom}>
        滚动到当前页面底部
      </div>
      <div className="text clickable" onClick={openPlasmoDoc}>
        查看Plasmo文档
      </div>
      <Button onClick={openNewTab}>open tab page</Button>
      <Button onClick={iframeMount}>iframe mounting</Button>
    </Container>
  )
}

export default IndexPopup
