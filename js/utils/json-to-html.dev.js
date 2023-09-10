/**
 * @todo block <script> element creation
 * @todo recognize paired and unpaired tags
 * @todo add more tags
 * @param content An array of nodes to be inserted in the section or
 *                another parent node given as `els` param.
 * @param lang    This value will be assigned to element's lang
 *                attribute. Undefined by default.
 * @param els     Array to be returned. May be assigned to
 *                recursively build a node tree. Empty array by
 *                default.
 */
function jsonToHtml(content, lang = undefined, els = []) {
  // DEBUG
  console.warn("parsing==>", content)

  let el

  content.forEach((child) => {
    if (typeof child === "string") {
      el = document.createTextNode(child)
    } else {
      const { tag, attributes, content, children } = child

      if (tag && tag !== "text") {
        el = document.createElement(tag)
        // DEBUG
        if (tag === "ul") console.log(el)

        if (content) {
          el.innerText = content
        } else if (children) {
          // DEBUG
          console.log("children", children)

          const c_els = jsonToHtml(children)
          // DEBUG
          console.log("c_els", c_els)

          // Append each children to the parent element
          c_els.forEach(c_el => {
            // Wrapping each children in a LI if it's a list
            if (tag === "ol"
              || tag === "ul"
              && c_el.tagName !== "LI") {
              const li = document.createElement("li")
              li.appendChild(c_el)

              el.appendChild(li)
            } else {
              el.appendChild(c_el)
            }
          })
        } else {
          // otherwise leave this element empty
          console.warn("newely created", el, "is empty")
        }
      } else if (content || tag === "text") {
        // chech for valid value
        if (typeof content !== "string")
          throw new Error("invalid value for text node:",
            typeof content);

        // create a text node
        el = document.createTextNode(content)

      } else {
        // DEBUG
        console.log(...child)

        throw new Error(
          "there's some other way in node creation branch")
      }
      // ATTRIBUTES
      // if object has an attribute field..
      if (attributes) {
        // ..traverse attributes..
        try {
          Object.keys(attributes).forEach(attr => {
            // DEBUG
            console.log("setting attr ->",
              attr, attributes[attr],
              "to", el)

            // ..adding attribute to the element
            el.setAttribute(attr, attributes[attr])
          })
        } catch (err) {
          throw new Error(err)
        }
      }
    }
    el.lang = lang
    els.push(el)
  })

  return els
}
