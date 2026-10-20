import { notFound } from 'next/navigation';
import { courseModules } from '@/data/courseData';
import { ClassroomClient } from '@/components/ClassroomClient';

export function generateStaticParams() {
  return courseModules.map((m) => ({
    id: m.id.toString(),
  }));
}

export default async function ModuleClassroomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const moduleId = parseInt(id, 10);
  const currentModule = courseModules.find((m) => m.id === moduleId);

  if (!currentModule) {
    notFound();
  }

  const prevModule = courseModules.find((m) => m.id === moduleId - 1);
  const nextModule = courseModules.find((m) => m.id === moduleId + 1);

  return (
    <ClassroomClient
      currentModule={currentModule}
      prevModule={prevModule}
      nextModule={nextModule}
    />
  );
}
