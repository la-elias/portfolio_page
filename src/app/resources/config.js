const baseURL = "luch0247.com";

const routes = {
    "/": true,
};

const style = {
theme: "dark", // dark | light
neutral: "gray", // sand | gray | slate
brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
solid: "contrast", // color | contrast
solidStyle: "flat", // flat | plastic
border: "playful", // rounded | playful | conservative
surface: "translucent", // filled | translucent
transition: "all", // all | micro | macro
};

const effects = {
mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
},
gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
},
dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
},
lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
},
grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: 100,
    height: 100,
},
};

const newsletterAction = {
    action: "https://luise631992.substack.com/",
    effects: {
      mask: {
        cursor: false,
        x: 100,
        y: 0,
        radius: 100,
      },
      gradient: {
        display: true,
        x: 100,
        y: 50,
        width: 100,
        height: 100,
        tilt: -45,
        colorStart: "accent-background-strong",
        colorEnd: "static-transparent",
        opacity: 100,
      },
      dots: {
        display: false,
        size: 24,
        color: "brand-on-background-weak",
        opacity: 100,
      },
      lines: {
        display: false,
        color: "neutral-alpha-weak",
        opacity: 100,
      },
      grid: {
        display: true,
        color: "neutral-alpha-weak",
        opacity: 100,
        width: 100,
        height: 100,
      },
    },
};

export { baseURL, routes, style, effects, newsletterAction };
