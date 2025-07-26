import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import SubmitButton from '@/components/ui/submit-button';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Department, Subject } from '@/types';
import { useForm } from '@inertiajs/react';

interface InitialValues{
    name: string;
    code: string;
    description: string;
    department: string;
}



export default function Subjects({ initialValues, subjects, departments }: { initialValues?: InitialValues; subjects?:Subject[], departments:Department[] }) {
    const isEdit = initialValues != null;

    console.log(subjects);
    // Initial values for the form
    const { data, setData, processing, post, put, errors } = useForm({
        name: initialValues?.name || '',
        description: initialValues?.description || '',
        code: initialValues?.code || '',
        department: initialValues?.department || '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(route('subjects.update'));
        } else {
            post(route('subjects.store'), {
                onSuccess: () => {
                    setData({
                        name: '',
                        code: '',
                        description: '',
                        department: '',
                    });
                },
            });
        }
    };

   
    const tableHeaders = ['#', 'Code', 'Subject Name', 'Department', 'Action'];

    const formData = (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="code"> Code</Label>
                    <Input
                        placeholder="e.g E103"
                        id="code"
                        type="text"
                        value={data.code}
                        onChange={(e) => {
                            setData('code', e.target.value);
                        }}
                    />
                    <InputError message={errors.code} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="name"> Name</Label>
                    <Input
                        placeholder="e.g Mathematics"
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => {
                            setData('name', e.target.value);
                        }}
                    />
                    <InputError message={errors.name} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="department"> Department</Label>
                    <Select onValueChange={(value) => setData('department', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder={'Department'}></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {departments &&
                                departments.map((department) => (
                                    <SelectItem key={department.id} value={department.id.toString()}>
                                        {department.name}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.department} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description">Description {'Optional'}</Label>
                    <Textarea
                        placeholder="Description..."
                        cols={3}
                        value={data.description}
                        onChange={(e) => {
                            setData('description', e.target.value);
                        }}
                    />
                </div>
                <SubmitButton isEdit={isEdit} processing={processing} />
            </div>
        </form>
    );

    const tableData = (
        <TableBody className="rounded-2xl">
            {
                subjects != null ? 
                    subjects && 
                    subjects.map((subjects, i) => (
                        <TableRow key={subjects.id} className="hover:bg-secondary">
                            <TableCell className="">{i + 1}</TableCell>
                            <TableCell>{ subjects.code }</TableCell>
                            <TableCell className="">{subjects.name}</TableCell>
                            <TableCell className="">{subjects.department?.name}</TableCell>
                            <TableCell className="text-green-500 hover:underline">MORE</TableCell>
                        </TableRow>
                    )) :
                    <TableRow className="hover:bg-secondary">
                        <TableCell colSpan={tableHeaders.length} className="text-center text-gray-500">No subjects available</TableCell>
                    </TableRow>
                
            }
        </TableBody>
    );

    return (
        <TableWithForm formContent={formData} formTitle="Add A Subject" tableData={tableData}  tableHeaders={tableHeaders} tableTitle="All Subjects" />
    );
}
