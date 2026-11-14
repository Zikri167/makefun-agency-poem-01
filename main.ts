import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const poem = `At 2:13, I asked it
to write the apology I had carried
from room to room all week.

It found the clean sentence:
I was wrong to leave you waiting.
No weather in it, no careful account
of the hour, the traffic, my fear.

I left the cursor blinking
after my name.
The machine could make the words
arrive before morning;
it could not make my hand
stay on the page.

I read the sentence aloud.
My voice caught on wrong.
I changed nothing.
Then pressed send:
the words went first;
my name had to follow.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), poem, "utf8");
