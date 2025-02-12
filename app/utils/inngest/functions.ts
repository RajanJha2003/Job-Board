import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);




export const handleJobExpiration=inngest.createFunction(
    {
        id:'job-expiration'
    },
    {event:'job/created'},
    async({event,step})=>{

        const {jobId,expirationDays}=event.data;
        

    }
)