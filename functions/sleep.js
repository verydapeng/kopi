export async function onRequest({ request }) {
    await step.sleep("sleep for a bit", "2 minute")
    return new Response("Hi");
}