import type { Arguments, CommandBuilder } from "yargs";
import { createPage } from "../notion/createPage";
import { getConfig, getNotionClient } from "../notion/init";

type Options = {
    title: string;
    content: string;
};

export const command = "page <title> <content>";
export const desc: string = "Create a page";

export const builder: CommandBuilder<Options> = (yargs) =>
    yargs.positional("title", {
        type: "string",
        demand: true,
    });

export const handler = async (argv: Arguments<Options>) => {
    const { title, content = "" } = argv;
    const client = await getNotionClient();
    const config = await getConfig();
    const response = await createPage(client, config.inboxId, title, content);
    process.stdout.write(`Page created: ${response.id}\n`);
};
