"use client"
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div className="container text-center pt-32">
        <h2>Page Not Found</h2>
        <Link href="/" className="btn mt-8 inline-block">Početna strana</Link>
      </div>
    </section>
  );
};

export default NotFound;
