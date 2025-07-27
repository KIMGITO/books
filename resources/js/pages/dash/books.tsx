import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import ClassesBar from './classes-bar';

export default function Books() {

    return (
        <AppLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Books</h1>
                <p className="mt-2 text-gray-600">View And Manage Books records and details.</p>
                <div className="mt-6 flex flex-col items-center justify-center">
                    <div className="w-11/12 rounded-2xl border p-2 md:w-fit">
                        {/* <ClassesBar /> */}
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
                                    {Array.from({ length: 5 }).map(() => (
                                        <TableRow className="text-center">
                                            <TableCell>1</TableCell>
                                            <TableCell>N/A</TableCell>
                                            <TableCell>English Book 2</TableCell>
                                            <TableCell>English</TableCell>
                                            <TableCell className="">2</TableCell>
                                            <TableCell>10</TableCell>
                                            <TableCell className="text-right">
                                                <button className="ml-2 text-green-500 hover:underline">More</button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
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
