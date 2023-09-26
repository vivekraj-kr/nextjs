import styles from "./page.module.css";

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className={styles.main}>
      <h1>Hello next js</h1>
      {data?.map((user) => (
        <p>
          {user?.username} - {user?.email}
        </p>
      ))}
    </main>
  );
}

async function getData() {
  const res = await fetch("https://strapi-be-lsoi.onrender.com/api/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
