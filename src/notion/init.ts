import { Client } from "@notionhq/client";
import fs from "fs/promises";

const RC_FILE_PATH = `${process.env.HOME}/.notion-direct-cli.json`;

export async function initNotion(token: string) {
    await fs.writeFile(RC_FILE_PATH, JSON.stringify({ token }, null, 2));
}

export async function getConfig() {
    try {
        const config = await fs.readFile(RC_FILE_PATH, "utf8");
        return JSON.parse(config);
    } catch (e) {
        process.stderr.write(`${e}\n`);
        throw new Error("Notion CLI is not initialized");
    }
}

export async function getNotionClient() {
    const rc = await getConfig();
    const { token } = rc;
    const client = new Client({ auth: token });
    return client;
}
