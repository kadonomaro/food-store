import { ContentfulClientApi } from "contentful";
import { contentfulClient } from "~/api/services/client";
import { IMapper } from "~/api/mapping";
import { Query } from "~/api/types";

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
        return this.client
            .getEntries({ content_type: this.type, "fields.slug[in]": slug })
            .then(({ items }) => {
                return this.mapper.getOne(items[0]);
            })
            .catch((error: Error) => {
                console.error(error.message);
                return null;
            });
    }

    getAll(query?: Query): Promise<T[]> {
        return this.client
            .getEntries({ content_type: this.type, ...query })
            .then(this.mapper.getAll)
            .catch((error: Error) => {
                console.error(error.message);
                return [];
            });
    }
}
