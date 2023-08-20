export async function onRequest({ env }) {
    await env.KOPI.put(url.searchParams.get("name"), url.searchParams.get("drink"), { expirationTtl: 14400 });
    return new Response("DONE");
}