import { printError } from "../jointLib/printResult.js";

export function FormToggle(form1, form2)
{
       form1.style.display = 'none';
       form2.style.display = 'block';
       printError("");
}