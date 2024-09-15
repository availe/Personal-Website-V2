import { GetServerSideProps } from "next";

const Escape = () => {
  return (
    <iframe src="/escape-html/game.html" className="h-screen w-screen"></iframe>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Escape;
