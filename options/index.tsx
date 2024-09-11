import React, { Component } from "react"

import { StorageToggle } from "@plasmohq/permission-ui"

function OptionPage() {
  return (
    <div>
      <h1>This is option page. </h1>
      <p>
        The options page is a native browser container that browser extensions
        can use to display a custom user interface. The options page behaves as
        a standalone web page that opens when the user clicks "Options" in the
        extension toolbar context menu.
      </p>

      <StorageToggle />
    </div>
  )
}

export default OptionPage
