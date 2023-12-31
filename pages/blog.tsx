import Layout from "@/components/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}
const Blog = (props: BlogProps) => {
  const { dataBlog } = props;

  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => {
        return (
          <div key={blog.id} className="border px-4 py-5">
            <p>{blog.title}</p>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();
  return { props: { dataBlog } };
};
