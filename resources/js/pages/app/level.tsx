import { TableWithForm } from "@/components/app-setting";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  TableBody, TableCell,  TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

export default function Level() {

    const tableHeaders = ['#', 'Grade', 'Description'];

    const tableData = (
        <TableBody className="rounded-2xl">
            {Array.from({ length: 12 }).map((_, i) => (
                <TableRow key={i} className="rounded">
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>Form {i + 1}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );

    const formData = (
        <form onSubmit={() => {}}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="level"> Level</Label>
                    <Input placeholder="e.g 1" id="level" type="number" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="note"> Note {'(optional)'}</Label>
                    <Textarea placeholder="e.g This is the first level" id="note" rows={3} />
                </div>

                <Button type="submit" variant={'ghost'}>
                    {' Save'}
                </Button>
            </div>
        </form>
    );

    return (
        <TableWithForm formContent={formData} formTitle="Add A Grade level" tableData={ tableData} tableHeaders={tableHeaders} tableTitle={'All Levels'}  />
    );
}

