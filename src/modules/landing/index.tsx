import Head from "next/head"
import { Header } from "./components/Header";
import { TaskTimer } from "./components/TaskTimer";

export const Landing = () => {
  return (
    <>
    <Header />
    <TaskTimer />
    </>
  );
};