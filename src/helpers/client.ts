import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../server/index';

export const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: '/api/',
        }),
    ],
});