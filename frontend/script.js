import { greet, salute } from './helper.js';
import add from './bruh.js';
const outputDiv = document.getElementById('output');
outputDiv.textContent = greet("world") + salute("bruh");
