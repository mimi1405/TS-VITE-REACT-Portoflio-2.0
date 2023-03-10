import React from "react";

export default function Skill(props: { name: string; icon: any }) {
  return (
    <>
      <h2>{props.name}</h2>
      <div>{props.icon}</div>
    </>
  );
}
