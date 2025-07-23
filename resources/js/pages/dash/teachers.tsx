import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AppLayout from "@/layouts/app-layout";

export default function Teachers
    () {
    return (
        <AppLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Teachers</h1>
                <p className="mt-2 text-gray-600">Manage teacher records and details.</p>
                <div className="flex w-full flex-col items-center justify-center">
                    <div className="rounded-2xl border p-2 w-11/12  md:w-fit">
                        <Table>
                            <TableHeader>
                                <TableHead>#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead>Subjects</TableHead>
                                <TableHead>Books issued</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead className="text-end">Actions</TableHead>
                            </TableHeader>
                            <TableBody>
                                {
                                    Array.from({ length: 5 }).map(() => (
                                        <TableRow className="text-center">
                                            <TableCell>1</TableCell>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>Science</TableCell>
                                            <TableCell>Physics, Chemistry</TableCell>
                                            <TableCell>5</TableCell>
                                            <TableCell>Teacher</TableCell>
                                            <TableCell className="text-right">
                                                <button className="ml-2 text-green-500 hover:underline">More</button>
                                                </TableCell>
                                        </TableRow>
                                    ))

                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}