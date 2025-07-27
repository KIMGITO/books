import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Grade } from '@/types';

export default function ClassesBar({ active, grades }: { active?: string, grades: Grade[]}) {
  
   
   
     
    return (
        <div className="mt-2 mb-6 w-full">
            <ScrollArea>
                <div className={`flex gap-2`}>
                    {grades &&
                        grades.map((grade, i) =>
                            grade.id.toString() == active ? (
                                <div className="border-rounded border-b border-b-green-400 bg-gray-400/30 px-2  text-green-500 text-center" key={i}>
                                    {grade.id}
                                </div>
                            ) : (
                                <a href={route('students.filter', grade.id)}>
                                    {' '}
                                    <div className="rounded bg-gray-400 px-2 text-center" key={i}>
                                        {grade.id}
                                    </div>
                                </a>
                            ),
                        )}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
}
