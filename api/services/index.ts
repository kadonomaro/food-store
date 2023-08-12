import { ContentfulClientApi } from "contentful";
import { contentfulClient } from "~/api/services/client";
import { IMapper } from "~/api/mapping";

export class BaseService<T> {
    private type: string;
    private client: ContentfulClientApi<any>;
    private mapper: IMapper;

    constructor(type: string, mapper: IMapper) {
        this.mapper = mapper;
        this.type = type;
        this.client = contentfulClient;
    }

    getOne(slug: string): Promise<T> {
        return this.client.getEntries({ content_type: this.type, "fields.slug[in]": slug }).then(({ items }) => {
            return this.mapper.getOne(items[0]);
        });
    }

    getAll(query?: object): Promise<T[]> {
        return this.client.getEntries({ content_type: this.type, ...query }).then(this.mapper.getAll);
    }
}
