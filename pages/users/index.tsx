import Layout from "@/components/Layout";
import { useRouter } from "next/router";

interface UserProps {
  dataUsers: any[];
}

const Users = ({ dataUsers }: UserProps) => {
  const router = useRouter();
  console.log(dataUsers);
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user: any, index: number) => {
        return (
          <div
            key={index}
            className="border px-10 cursor-pointer py-4"
            onClick={() => {
              router.push(`/users/${user.id}`);
            }}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return { props: { dataUsers } };
};

export default Users;
