// "use client";
import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("C:\\Users\\nishetty\\Documents\\Niroop\\vscode\\NextJs\\NextJs\\nextreactapp\\src\\components\\server-component-two.tsx", "utf-8");
  return <h1>ServerComponentTwo</h1>;
};