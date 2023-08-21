export async function onRequest({ request, env }) {
    let url = new URL(request.url);
    await env.KOPI.put(url.searchParams.get("name"), url.searchParams.get("drink"), { expirationTtl: 14400 });
    return new Response("Order Accepted");
}