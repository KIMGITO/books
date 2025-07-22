import { TableWithForm } from '@/components/app-setting';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';

export default function Subjects() {

    const tableHeaders = ['#', 'Subject Name', 'Department'];
     
    const formData = (
        <form onSubmit={() => {}}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name"> Name</Label>
                    <Input placeholder="e.g Mathematics" id="name" type="text" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="department"> Department</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder={'Department'}></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="science">{'Science'}</SelectItem>
                            <SelectItem value="arts">{'Arts'}</SelectItem>
                            <SelectItem value="commerce">{'Commerce'}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button type="submit" variant={'ghost'}>
                    {' Save'}
                </Button>
            </div>
        </form>

    );

    const tableData = (
        <TableBody className='rounded-2xl'>
           { Array.from({length: 12}).map((_,i) => {
                return (
                    <TableRow key={i} className="rounded">
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>Subject {i + 1}</TableCell>
                        <TableCell>Department {i + 1}</TableCell>
                    </TableRow>
                );
            }) }
        </TableBody>
    );

    return (
        <TableWithForm formContent={formData} formTitle='Add A Subject' tableData={tableData} tableHeaders={tableHeaders}  tableTitle='All Subjects' />
    );
}
