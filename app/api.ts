const BASE_URL = 'http://localhost:8080'

export default async function api<T>(method: string, url: string, data?: T | null) {
  try {
    const resp = await fetch(`${BASE_URL}/api${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    return resp.json();
  } catch (err) {
    console.log(err);
  }
}
