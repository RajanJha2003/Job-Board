import { inngest } from "@/app/utils/inngest/client";
import { handleJobExpiration, helloWorld } from "@/app/utils/inngest/functions";
import { serve } from "inngest/next";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    helloWorld,
    handleJobExpiration
  ],
});
