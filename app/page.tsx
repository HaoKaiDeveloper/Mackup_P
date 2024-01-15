import Hero from "./components/Homepage/Hero";
import About from "./components/Homepage/About";
import Products from "./components/Homepage/Products";

async function getData() {
  const res = await fetch(`${process.env.SSR_HOST}/api/getProduct?page=2`);

  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const data = await getData();
  return (
    <section className="mt-[60px]">
      <Hero />
      <About />
      <Products products={data} />
    </section>
  );
}
