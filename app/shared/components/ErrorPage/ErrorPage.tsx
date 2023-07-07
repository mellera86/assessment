import Image from "next/image";

interface ErrorPageProps {
  message?: string;
}

const DEFAULT_MESSAGE = "Something went really wrong. Please try again later.";

const ErrorPage = ({ message = DEFAULT_MESSAGE }: ErrorPageProps) => {
  return (
    <section className="h-screen w-screen flex flex-col mt-[5vh] items-center text-lg relative">
      <Image
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Error animation"
        width={500}
        height={500}
      />
      <span className="relative -top-16 text-xl text-center px-4">
        {message}
      </span>
    </section>
  );
};

export { ErrorPage };
