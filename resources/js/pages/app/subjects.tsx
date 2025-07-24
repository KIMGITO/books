import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';

interface InitialValues{
    name: string;
    department: string;
}

export default function Subjects({ initialValues }: { initialValues: InitialValues }) {
    const isEdit = initialValues != null;

    // Initial values for the form
    const { data, setData, processing, post, put, errors } = useForm({
        name: initialValues?.name || '',
        department: initialValues?.department || ''
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(route('subjects.update'))
        } else {
            post(route('subjects.store'));
        }
    }
    // Set subject name
    const handleName = (nameInput: string) => {
        if (nameInput) {
            setData('name', nameInput);
            data.name = nameInput;
        }
    };
    // Set subject department
    const handleDepartment = (departmentInput: string) => {
        if (departmentInput) {
            setData('department', departmentInput);
            data.department = departmentInput;
        }
    };




    const tableHeaders = ['#', 'Subject Name', 'Department'];
     
    const formData = (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name"> Name</Label>
                    <Input
                        placeholder="e.g Mathematics"
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => {
                            handleName(e.target.value);
                        }}
                    />
                    <InputError message={errors.name} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="department"> Department</Label>
                    <Select onValueChange={(value) => handleDepartment(value)}>
                        <SelectTrigger>
                            <SelectValue placeholder={'Department'}>{data.department}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="science">{'Science'}</SelectItem>
                            <SelectItem value="arts">{'Arts'}</SelectItem>
                            <SelectItem value="commerce">{'Commerce'}</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.department} />
                </div>

                <Button type="submit" variant={'ghost'} className={`${processing ? 'cursor-progress' : 'cursor-pointer'}`}>
                    {processing ? <Loader className="animate-spin" /> : `${isEdit ? 'Update' : 'Save'}`}
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
