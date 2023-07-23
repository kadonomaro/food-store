import { createClient, ContentfulClientApi, EntrySkeletonType } from "contentful";
import { mapArrayResponse } from "~/api/mapping";

export class BaseService<T> {
    private type: string;
    private client: ContentfulClientApi<any>;

    constructor(type: string) {
        this.type = type;
        this.client = createClient({
            space: import.meta.env.VITE_CTF_SPACE_ID,
            accessToken: import.meta.env.VITE_CTF_CDA_ACCESS_TOKEN,
        });
    }

    getOne() {}

    getAll(): Promise<T[]> {
        return this.client.getEntries({ content_type: this.type }).then(mapArrayResponse);
    }
}
