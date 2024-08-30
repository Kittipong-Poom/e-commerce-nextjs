import Link from "next/link";

const ErrorPage = () => {
  const homeUrl = process.env.NEXT_PUBLIC_HOME_URL || "/";

  return (
    <section className="py-72">
      <div className="container mx-auto">
        <h3 className="text-center mb-4">Something went wrong!</h3>
        <Link href={homeUrl}>
          <button className="btn btn-accent mx-auto uppercase rounded-full">
            Back to the homepage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
