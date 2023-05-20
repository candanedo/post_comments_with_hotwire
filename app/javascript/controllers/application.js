import { Application } from "@hotwired/stimulus"

const application = Application.start()

import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
lazyLoadControllersFrom("controllers", application)

application.debug = false
window.Stimulus   = application

export { application }
