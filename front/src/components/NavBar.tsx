"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../public/logo.jpg";

const links = [
  { name: "products", text: "Productos", href: "/products" },
  { name: "login", text: "Iniciar sesión", href: "/login" },
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("storedUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("storedUser");
    setUser(null);
    router.push("/login");
  };

  return (
    <nav className="max-md:hidden">
      <div className="flex items-center justify-between flex-wrap bg-gray-600 p-1 px-5 drop-shadow-xl">
        <Link href="/">
          <Image src={logo} width="100" alt="logo" className="rounded-full" />
        </Link>
        <ul className="flex items-center space-x-4">
          {links.map((link) => {
            if (link.name === "login" && user) return null;
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`p-6 hover:brightness-75
                        ${pathname === link.href ? "cursor-default brightness-75 disabled" : ""}`}
              >
                {link.text}
              </Link>
            );
          })}
          {user && (
            <>
              <Link
                href="/dashboard"
                className={`p-6 hover:brightness-75
                        ${pathname === "/dashboard" ? "cursor-default brightness-75 disabled" : ""}`}
              >
                Tu alimentación
              </Link>
              <button
                onClick={handleLogout}
                className="p-6 hover:brightness-75"
              >
                Cerrar sesión
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;