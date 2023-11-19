import { Role } from "sailpoint-api-client";
import { IdentityNowClient } from "../../services/IdentityNowClient";

export default class RolePaginator implements AsyncIterable<Role[]> {

    constructor(
        private client: IdentityNowClient
    ) { }

    async *[Symbol.asyncIterator](): AsyncIterableIterator<Role[]> {
        const response = await this.client.getRoles();
        yield response.data;
    }
}