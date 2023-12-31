import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      console.log("dipanggil setelah 3 detik");
      router.push("/");
    }, 3000);
  }, []);
  return <div>Oooppss halaman yang anda cari tidak ada</div>;
};

export default Custom404;
