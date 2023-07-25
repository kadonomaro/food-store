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

    getOne() {}

    getAll(): Promise<T[]> {
        return this.client.getEntries({ content_type: this.type }).then(this.mapper.getAll);
    }
}
