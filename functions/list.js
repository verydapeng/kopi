export async function onRequest({ env }) {
    let response = [];
    for (let { name } of (await env.KOPI.list()).keys) {
        response.push({
            name,
            drink: await env.KOPI.get(name)
        });
    }

    return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } });
}