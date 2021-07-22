export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  //   [{params:{id:ninja.id.toString()}} , {}, {}....] array returned by getStaticPaths for creating pages based on ids
  return {
    paths,
    fallback: false,
  };
};

// context has url property params
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return { props: { ninja: data } };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.address.city}</p>
      <p>{ninja.website}</p>
    </div>
  );
};

export default Details;