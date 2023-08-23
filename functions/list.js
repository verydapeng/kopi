export async function onRequest({ env }) {
    let keys = (await env.KOPI.list()).keys;

    let response = Promise.all(keys.map(async name => {
        return {
            name,
            drink: (await env.KOPI.get(name))
        }
    }));

    return new Response(JSON.stringify(response), { headers: { "Content-Type": "application/json" } });
}