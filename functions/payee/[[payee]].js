export async function onRequest({ params, env }) {
  if (!params.payee) return new Response((await env.KOPI.get("PAYEE_NAME")) || "");
  const oldPayee = await env.KOPI.get("PAYEE_NAME");
  await env.KOPI.put("PAYEE_NAME", params.payee[0], { expirationTtl: 14400 });
  return new Response(`Success: {new: ${params.payee}, old: ${oldPayee || ""}}`);
}
