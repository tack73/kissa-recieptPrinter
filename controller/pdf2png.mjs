import * as fs from "node:fs/promises";
import {pdf} from 'pdf-to-img';

export default async function pdf2png(submitId) {
    const document = await pdf(`./tmp/${submitId}.pdf` , {scale : 3}).catch(() => { console.error("can't read PDF") });
    await fs.writeFile(`./tmp/${submitId}.png`, document);
}

pdf2png("191d23b14753a");

