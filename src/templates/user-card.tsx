"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function UserCard() {
  const mockUser = [
    {
      id: 1,
      name: "Adriel",
      email: "adriel@live.com",
    },
    {
      id: 3,
      name: "Marcelo siqueira",
      email: "marce@ablive.com",
    },
    {
      id: 3,
      name: "Juca pedro",
      email: "juca@ablive.com",
    },
    {
      id: 3,
      name: "Simão lucas",
      email: "simluc@ablive.com",
    },
    {
      id: 3,
      name: "Thomas jose",
      email: "josé@ablive.com",
    },
    {
      id: 3,
      name: "Nicolas",
      email: "nicolas@ablive.com",
    },
    {
      id: 5,
      name: "Adrielzim",
      email: "adrielz@ablive.com",
      logged: true,
    },
  ];

  const [userLogged, setUserLogged] = useState<any>({});

  useEffect(() => {
    setUserLogged(mockUser.find((item) => item.logged));
  }, []);

  return (
    <div>
      <div className="fixed-top w-full h-20">
        <div className="flex justify-content-between">
          <div className="padding-left-3">
            <Image
              src="/adriel-developer-logo.png"
              width={170}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="flex gap-12 flex-row pr-4">
            <h1 className="hover-underline margin-top-075">
              Usuario logado: {userLogged.name}
            </h1>
            <button className="btn">Criar novo usuário</button>
            <button className="btn">Deslogar</button>
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 justify-content-between flex-reverse-row">

      <div className="padding-left-5">
      <div >
        <Image
              src="/adriel-developer-logo.png"
              width={500}
              height={100}
              alt="Picture of the author"
            />
          <h1 className="text-3xl text-center font-bold margin-top-075">Crud Full-Stack</h1>
          <br/>
          <h6 className="text-2xl">Front End: Desenvolvido com Next 13.4, Tailwind e React Query</h6>
          <h6 className="text-2xl">Front Back End: Desenvolvido em Node com Nestjs e Prisma usando SQLITE</h6>
      </div>
      </div>

      <div
        className="scrollbar flex gap-3 padding-left-1"
        style={{
          flexDirection: "column",
          maxHeight: "700px",
        }}
      >
        {mockUser.map((item) => {
          return (
            <div
              key={item.id}
              className="card-content flex "
              style={{
                width: "600px",
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h1>Nome: {item.name}</h1>
                <h1>Email: {item.email}</h1>
              </div>
              <div>
                <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md btn">
                  <Image
                    width={20}
                    height={10}
                    alt="Picture of the author"
                    src={"./trash-icon.svg"}
                  />
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md btn">
                  <Image
                    width={20}
                    height={10}
                    alt="Picture of the author"
                    src={"./edit-icon.svg"}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      </div>
    </div>
  );
}
