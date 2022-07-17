import type { Arguments, CommandBuilder } from "yargs";

type Options = {
    name: string;
    upper: boolean;
};

export const command = "greet <name>";
export const desc: string = "Greet <name> with a message";

export const builder: CommandBuilder<Options> = (yargs) =>
    yargs
        .option({
            upper: {
                type: "boolean",
                default: false,
            },
        })
        .positional("name", {
            type: "string",
            demand: true,
        });

export const handler = (argv: Arguments<Options>) => {
    const { name, upper } = argv;
    const message = upper ? name.toUpperCase() : name;
    process.stdout.write(`Hello ${message}\n`);
    process.exit(0);
};
