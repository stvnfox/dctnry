import { publicProcedure, router } from './trpc';
import { z } from 'zod';

const appRouter = router({
    getResults: publicProcedure
        .input(
            z.object({
                query: z.string({
                    required_error: "Id is required",
                }),
            })
        ).query( ({ opts }) => {
            return 'Hi'
        })
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;