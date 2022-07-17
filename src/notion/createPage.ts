import { Client } from "@notionhq/client";

export async function createPage(
    client: Client,
    databaseId: string,
    title: string,
    content: string
) {
    const response = await client.pages.create({
        parent: {
            database_id: databaseId,
        },
        properties: {
            Name: {
                title: [
                    {
                        text: {
                            content: title,
                        },
                    },
                ],
            },
            Description: {
                rich_text: [
                    {
                        text: {
                            content,
                        },
                    },
                ],
            },
        },
    });
    return response;
}
