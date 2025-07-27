import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import ClassesBar from './classes-bar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Grade, Student } from '@/types';

export default function Students({students, active,  grades}:{students:Student[], active: string, grades:Grade[]}) {
    return (
        <AppLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Students</h1>
                <p className="mt-2 text-gray-600">View And Manage Student records and details.</p>
                <div className="mt-6 flex flex-col items-center justify-center">
                    <div className="w-11/12 rounded-2xl border p-2 md:w-fit">
                        <ClassesBar active={active} grades={grades} />
                        <div className="w-full border-t border-t-gray-600"></div>
                        <ScrollArea>
                            <Table className="w-1/2 py-2">
                                <TableHeader>
                                    <TableHead>#</TableHead>
                                    <TableHead>ADM.No</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Class</TableHead>
                                    <TableHead>Gender</TableHead>
                                    <TableHead>Books Owed</TableHead>
                                    <TableHead className="text-end">Actions</TableHead>
                                </TableHeader>
                                <TableBody>
                                    {students.length != 0 ?  students && students.map((student, i) => (
                                        <TableRow className="text-center">
                                            <TableCell>{ i+1 }</TableCell>
                                            <TableCell>{student.adm_no}</TableCell>
                                            <TableCell> { student.first_name } { student.middle_name } {student.sir_name} </TableCell>
                                            <TableCell>{student.grade?.name}</TableCell>
                                            <TableCell className="">{student.gender}</TableCell>
                                            <TableCell>10</TableCell>
                                            <TableCell className="text-right">
                                                <button className="ml-2 text-green-500 hover:underline">More</button>
                                            </TableCell>
                                        </TableRow>
                                    )) : 
                                        <TableRow>
                                            <TableCell className='text-center'  colSpan={7} > No student found</TableCell>
                                        </TableRow>
                                    }
                                </TableBody>
                            </Table>
                            <ScrollBar orientation='horizontal' className='mt-6' />
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
