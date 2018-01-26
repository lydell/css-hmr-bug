import styles from "./index.css";

console.log("CSS classes", styles);

const test = document.createElement("p");
test.textContent = "test";
test.className = styles.test;

document.body.appendChild(test);
