import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';

export default function Students() {
    return (
        <AppLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Students</h1>
                <p className="mt-2 text-gray-600">View And Manage Student records and details.</p>
                <div className="flex flex-col  items-center justify-center">
                    <div className="rounded-2xl w-11/12 border p-2  md:w-fit">
                        <Table className='w-1/2'>
                            <TableHeader>
                                <TableHead>#</TableHead>
                                <TableHead>ADM.No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Class</TableHead>
                                <TableHead>Subjects Taken</TableHead>
                                <TableHead>Books Owed</TableHead>
                                <TableHead className="text-end">Actions</TableHead>
                            </TableHeader>
                            <TableBody>
                                {Array.from({ length: 5 }).map(() => (
                                    <TableRow className="text-center">
                                        <TableCell>1</TableCell>
                                        <TableCell>1161</TableCell>
                                        <TableCell>dennis kimanthi</TableCell>
                                        <TableCell>form 4</TableCell>
                                        <TableCell className=''>english, maths, chemistry, geography, physics</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell className="text-right">
                                            <button className="ml-2 text-green-500 hover:underline">More</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
