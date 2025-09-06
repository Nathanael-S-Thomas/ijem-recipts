// netlify/functions/invoice.js
let counter = 0; // resets if Netlify redeploys (ephemeral)

export async function handler() {
  counter += 1;
  return {
    statusCode: 200,
    body: JSON.stringify({ invoiceNumber: counter })
  };
}
