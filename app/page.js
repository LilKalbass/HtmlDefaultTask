import Image from "next/image";
import {Order} from "@/app/components/Order";
import {About} from "@/app/components/About";
import {Result} from "@/app/components/Result";

export default function Home() {
  return (
      <main className=''>
        <Order/>
        <About/>
        <Result/>
      </main>
  );
}
