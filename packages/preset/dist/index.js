import { definePreset } from "@pandacss/dev";
const preset = definePreset({
    name: "crispy-bacon",
    theme: {
        extend: {
            semanticTokens: {
                colors: {
                    primary: {
                        bg: {
                            value: "{colors.blue.500}",
                        },
                        fg: {
                            value: "{colors.white}",
                        },
                    },
                },
            },
        },
    },
});
export default preset;
