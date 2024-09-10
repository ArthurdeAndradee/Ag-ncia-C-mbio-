import React from "react";
import Theme from "../components/theme";
import Input from "@/components/input";


export default function Home() {
  return (
    <div className="rounded-lg">
  
      <div className="justify-center items-center position: absolute;">
        {""}
        <Theme />
        <div><Input /></div>
       
      </div>
    </div>
  );
}
