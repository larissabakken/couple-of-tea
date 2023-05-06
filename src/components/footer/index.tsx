import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          © 2023 by{" "}
          <Link href={"https://github.com/ramos-larissa"} className="text-[var(--primary-color-dark)]">Larissa Ramos</Link>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
