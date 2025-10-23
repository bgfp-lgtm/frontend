import React from "react";
import ProjectPage from "./ProjectPage";
import { getGlobalData } from "@/data/loader";

type Props = {};

export default async function ProjectsPage({}: Props) {
  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];
  return (
    <div>
      <ProjectPage cta={cta} />
    </div>
  );
}
