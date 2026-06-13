const mainContainer = document.getElementById("root");

function customRender(customReactElement, container) {
  const domElement = document.createElement(customReactElement.type);
  domElement.innerHTML = customReactElement.children;
  //   domElement.setAttribute("href", customReactElement.props.href);
  //   domElement.setAttribute("target", customReactElement.props.target);

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, customReactElement.props[prop]);
  }

  //   for...in is used for non-iterables like objects
  //   for...of is udsed for iterables like arrays

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

customRender(reactElement, mainContainer);
