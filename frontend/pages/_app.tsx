import React from "react";
import type { AppProps } from "next/app";
import { Role } from "@model";

export default function App({}: AppProps) {
  function canEdit(role: Role) {
    return role === Role.ADMIN;
  }

  return (
    <>
      <h1>Roles</h1>
      <ul>
        {Object.values(Role).map((role) => (
          <li key={role}>
            {role} / editable:{canEdit(role)}
          </li>
        ))}
      </ul>
    </>
  );
}
