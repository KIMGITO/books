import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AppLayout from "@/layouts/app-layout";
import { Teacher } from "@/types";



export default function Teachers
    ({teachers} : {teachers:Teacher[]}) {
    return (
        <AppLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Teachers</h1>
                <p className="mt-2 text-gray-600">Manage teacher records and details.</p>
                <div className="mt-6 flex w-full flex-col items-center justify-center">
                    <div className="w-11/12 rounded-2xl border p-2 md:w-fit">
                        <ScrollArea>
                            <Table>
                                <TableHeader>
                                    <TableHead>#</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Department</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead className="text-end">Actions</TableHead>
                                </TableHeader>
                                <TableBody>
                                    {teachers != null ? (
                                        teachers &&
                                        teachers.map((teacher, i) => (
                                            <TableRow key={teacher.id}>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{`${teacher.first_name} ${teacher.middle_name ? teacher.middle_name + ' ' : ''}${teacher?.sir_name}`}</TableCell>
                                                <TableCell>{teacher.department?.name}</TableCell>
                                                <TableCell>{teacher.grade != null ? `Class teacher ${teacher.grade.name}` : '- -'}</TableCell>
                                                <TableCell className=" text-end text-green-500 hover:underline">MORE</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={7} className="text-center">
                                                No teachers found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}