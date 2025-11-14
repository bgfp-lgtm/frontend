import React from "react";
import ProjectPage from "./ProjectPage";
import { getGlobalData, getProject } from "@/data/loader";

type Props = {};

export default async function ProjectsPage({}: Props) {
  const globalresponse = await getGlobalData();
  const cta = globalresponse?.data?.cta[0];

  const { data } = await getProject();
  return (
    <div>
      <ProjectPage cta={cta} projects={data} />
    </div>
  );
}
