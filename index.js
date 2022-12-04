import {writeFile, readFile} from "node:fs";
import { exit } from "node:process";

const me = {
    firstname: "Inon",
    lastname: "Avramashvili",
    age: 29
}

writeFile("./me.json", JSON.stringify(me), (error) => {
    if(error) {
        console.lerrorog(error);
        exit(1)
    }
    readFile("./me.json", (error, data) => {
        if(error) {
          console.error(error);
        exit(2);  
        }
        console.log(JSON.parse(data));
    });
})