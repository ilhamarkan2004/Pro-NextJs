import Layout from "@/components/Layout";
import { useRouter } from "next/router";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}
const Detail = (props: UserDetailProps) => {
  const router = useRouter();
  // const { id } = router.query;
  const { user } = props;
  return (
    <Layout pageTitle="Detail Users">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return { paths, fallback: false };
};

interface GetStaticProps {
  params: { id: string };
}
export const getStaticProps = async (context: GetStaticProps) => {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();
  return { props: { user } };
};
