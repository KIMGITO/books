import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {  Subject } from '@/types';

export default function SubjectsBar({ active, subjects }: { active?: string, subjects: Subject[]}) {
  
   
   
     
    return (
        <div className="mt-2 mb-6 w-full">
            <ScrollArea>
                <div className={`flex gap-2`}>
                    {subjects &&
                        subjects.map((subject, i) =>
                            subject.id.toString() == active ? (
                                <div className="border-rounded border-b border-b-green-400 bg-gray-400/30 px-2  text-green-500 text-center" key={i}>
                                    {subject.name}
                                </div>
                            ) : (
                                <a href={route('books.filter', subject.id)}>
                                    
                                    <div className="rounded bg-gray-400 px-2 text-center" key={i}>
                                        {subject.name}
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
