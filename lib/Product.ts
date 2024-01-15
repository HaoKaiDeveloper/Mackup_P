const HOST = process.env.SSR_HOST;

export async function getProduct(id: string) {
  try {
    const res = await fetch(`${HOST}/api/getProduct/${id}`);
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw new Error("error");
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch(`${HOST}/api/getProduct?page=2`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("error");
  }
}
