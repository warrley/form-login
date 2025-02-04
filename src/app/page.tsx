import Image from "next/image";
import { Form } from "../components/Form";

export default function Home() {
  return (
    <div className="h-screen w-full bg-zinc-700 flex items-center justify-center">
      <Form/>
    </div>
  );
}
