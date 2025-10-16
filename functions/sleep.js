export async function onRequest({ request }) {
    
    function s(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await s(80000);


    return new Response("Hi");
}