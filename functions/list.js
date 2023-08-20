export async function onRequest(context) {
    let keys = (await env.KOPI.list()).keys;
    let v = {};

    for (let { name } of keys) {
        v[name] = await env.KOPI.get(name);
    }

    return new Response(JSON.stringify(v), { headers: { "Content-Type": "application/json" } });
}