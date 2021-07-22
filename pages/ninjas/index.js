// function provided by next data fetching before rendering
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const AllNinjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Users</h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id} className="ninjaUser">
          <a>
            <h1>{ninja.name}</h1>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllNinjas;
