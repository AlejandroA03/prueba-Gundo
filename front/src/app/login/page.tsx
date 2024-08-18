"use client"

import { useState } from "react";
import axios from "axios";
import { ILogin, IStored } from "../types";

const LOGINUSER_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
  const [storedUser, setStoredUser] = useState<IStored | null>(null);

  const [userData, setUserData] = useState<ILogin>({
    username: "",
    password: ""
  });

  const inputHandler = (event: any) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    axios.post(`${LOGINUSER_URL}/users`, userData)
      .then(({ data }) => {
        localStorage.setItem("storedUser", JSON.stringify(data));
        return data;
      })
      .then(data => {
        setStoredUser(JSON.parse(localStorage.getItem("storedUser") || "null"));
        window.location.replace("/");
      })
      .catch(() => alert("Usuario o contraseña incorrecta."));
  };

  return (
    <div className=" grid place-content-center m-7">
      <form onSubmit={submitHandler} className="rounded-xl bg-gray-500 w-96 relative p-10 mb-32">
        <div>
          <h2 className="w-full text-center mb-10 text-lg">Iniciar sesión</h2>
          <div>
            <label htmlFor="username" className="my-3 w-full px-5">Usuario: </label>
            <input type="string" name="username" id="username" value={userData.username} required onChange={inputHandler} className="block bg-gray-400 rounded-lg p-3 text-sm my-3 w-full px-5" />
          </div>
          <div>
            <label htmlFor="password" className="my-3 w-full px-5">Contraseña: </label>
            <input type="password" name="password" id="password" value={userData.password} required onChange={inputHandler} className="block bg-gray-400 rounded-lg p-3 text-sm my-3 w-full px-5" />
          </div>
          <button className="block w-2/3 rounded-lg bg-green-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Ingresar</button>
        </div>
      </form>
    </div>
  );
}