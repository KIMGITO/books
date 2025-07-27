import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Book, Subject } from '@/types';
import SubjectsBar from './subjects-tab';

export default function Books({books,subjects,active}:{active:string, books:Book[], subjects:Subject[]}) {

    return (
        <AppLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Books</h1>
                <p className="mt-2 text-gray-600">View And Manage Books records and details.</p>
                <div className="mt-6 flex flex-col items-center justify-center">
                    <div className="w-11/12 rounded-2xl border p-2 md:w-fit">
                       <SubjectsBar active={active} subjects={subjects}/>
                        <div className="w-full border-t border-t-gray-600"></div>
                        <ScrollArea>
                            <Table className="w-1/2 py-2">
                                <TableHeader>
                                    <TableHead>#</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Level</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead className="text-end">Actions</TableHead>
                                </TableHeader>
                                <TableBody>
                                    {
                                        books.length != 0 ? books && books.map((book, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>N/A </TableCell>
                                                <TableCell>{book.title}</TableCell>
                                                <TableCell>{book.subject.name}</TableCell>
                                                <TableCell>{book.level.name}</TableCell>
                                                <TableCell>{book.quantity}</TableCell>
                                                <TableCell className='text-end text-green-500 hover:underline'>MORE</TableCell>
                                            </TableRow>
                                        )) : 
                                            <TableRow>
                                                <TableCell colSpan={7} className='text-center'>No Books Found</TableCell>
                                            </TableRow>
                                }
                                </TableBody>
                            </Table>
                            <ScrollBar orientation="horizontal" className="mt-6" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
