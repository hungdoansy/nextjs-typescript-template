import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const appEnv = createEnv({
    server: {
        DEBUG: z.boolean(),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().url(),
    },
    runtimeEnv: {
        // server
        DEBUG: process.env.DEBUG === "true",

        // client
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
})
