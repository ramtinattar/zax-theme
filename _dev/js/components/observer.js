const checkIfIncluded = (file) => {
  const links = Array.from(document.getElementsByTagName("link"))
  const scripts = Array.from(document.getElementsByTagName("script"))

  const fileMatch = (element) => {
    return !!(element && (element.src && element.src.endsWith(file)) || element && (element.href && element.href.endsWith(file)));
  }

  return links.some(fileMatch) || scripts.some(fileMatch)
};


const SectionObserver = class {
  constructor(target, threshold) {
    this.target = target
    this.threshold = threshold
    this.observer()
  }

  observer() {
    const options = {
      rootMargin: '50% 0px',
      threshold: this.threshold
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target
          const sectionName = section.dataset.axSection

          let styleSrc;
          for (const css of window.assetsUrl.css) {
            if (css.hasOwnProperty(sectionName)) {
              styleSrc = css[sectionName]
              break
            }
          }

          if (typeof styleSrc !== 'undefined') {
            const styleTag = document.createElement("link")
            styleTag.type = "text/css"
            styleTag.rel = "stylesheet"
            styleTag.href = styleSrc

            const checkingCss = checkIfIncluded(styleTag.href)
            if (!checkingCss) {
              document.getElementsByTagName('head')[0].appendChild(styleTag)
            }
          }

          let scriptSrc;
          for (const js of window.assetsUrl.js) {
            if (js.hasOwnProperty(sectionName)) {
              scriptSrc = js[sectionName]
              break
            }
          }

          if (typeof scriptSrc !== 'undefined') {
            const scriptTag = document.createElement("script")
            scriptTag.type = "text/javascript"
            scriptTag.src = scriptSrc

            const checkingJs = checkIfIncluded(scriptTag.src)
            if (!checkingJs) {
              document.getElementsByTagName('head')[0].appendChild(scriptTag)
            }
          }

          observer.unobserve(section)
        }
      });
    }, options)

    const target = document.querySelectorAll(this.target)
    for (const section of target) {
      observer.observe(section)
    }
  }
}


export default SectionObserver;