/* eslint-disable no-console */
import Tag from './Tag';

console.log(new Tag("br").toString());
console.log(new Tag("img", { src: "path/to/image" }).toString());
console.log(new Tag("input", { type: "submit", value: "Save" }).toString());
console.log(new Tag("label", {}, "Email").toString());
console.log(new Tag("label", { for: "email" }, "Email").toString());
console.log(new Tag("div").toString());