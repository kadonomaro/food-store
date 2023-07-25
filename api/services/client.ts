import { createClient } from "contentful";

export const contentfulClient = createClient({
    space: import.meta.env.VITE_CTF_SPACE_ID,
    accessToken: import.meta.env.VITE_CTF_CDA_ACCESS_TOKEN,
});
