import Handlebars from "handlebars";
import { products } from "./data";

import ProductSource from "bundle-text:../template.hbs";

const container = document.querySelector("[data-con]");

const productTemp = Handlebars.compile(ProductSource);
const productHTML = productTemp(products);
container.innerHTML = productHTML;
