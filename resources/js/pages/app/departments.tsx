import { TableWithForm } from "@/components/app-setting";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

export default function Departments() {

    const tableHeads = ['#', 'Name', 'Subjects'];
    const tableBody = (
        <TableBody className="rounded-2xl">
            {Array.from({ length: 12 }).map((_, i) => (
                <TableRow key={i} className="rounded">
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>Department {i + 1}</TableCell>
                    <TableCell>Subject {i + 1}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
    const formContent = (
        <form onSubmit={() => {}}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name"> Name</Label>
                    <Input placeholder="e.g 1" id="name" type="number" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description"> Note {'(optional)'}</Label>
                    <Textarea placeholder="e.g This is a science department" id="description" rows={3} />
                </div>

                <Button type="submit" variant={'ghost'}>
                    {' Save'}
                </Button>
            </div>
        </form>
    );
     return (
         <TableWithForm formContent={formContent} formTitle="Add a Department" tableData={ tableBody } tableHeaders={tableHeads}  tableTitle="All departments" />
     );
}