// pages/settings.tsx
import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useForm } from '@inertiajs/react';

interface InitialValue {
    name: string;
    teacher: string;
}

export default function SettingsPage({ initialValue }: { initialValue?: InitialValue }) {
    const isEdit = initialValue != null;


    const { data, setData, errors, post, put } = useForm({
        name: initialValue?.name || '',
        teacher: initialValue?.teacher || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put('/grades');
        } else {
            post('/grades');
        }
        
    }

    //set Class name
    const handleName = (nameInput: string) => {
        if (nameInput) {
            setData('name', nameInput);
            data.name = nameInput;
        }
    };
    //set Class teacher
    const handleTeacher = (teacherInput: string) => {
        if (teacherInput) {
            setData('teacher', teacherInput);
            data.teacher = teacherInput;
        }
    };




    // Table data could also be passed as objects and mapped inside the component
    const tableBody = (
        <TableBody>
            {Array.from({ length:12 }).map((_, i) => (
                <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>Form {i + 1} East</TableCell>
                    <TableCell>Teacher {i + 1}</TableCell>
                    <TableCell>{40 + i}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );

    
    const formContent = (
        <form onSubmit={handleSubmit }>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input placeholder="e.g. 1" id="name" value={data.name} onChange={(e) => handleName(e.target.value)} />
                    <InputError message={errors.name} />
                </div>
                <div className="grid gap-4">
                    <Label htmlFor="teacher">Class Teacher</Label>
                    <Select onValueChange={(value) => {handleTeacher(value)}}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select teacher" ></SelectValue>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="1">John Nyaga</SelectItem>
                            <SelectItem value="2">Kamau</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.teacher} />
                </div>
                <Button variant={'ghost'} type="submit">Save</Button>
            </div>
        </form>
    );

    return (
        <TableWithForm
            tableTitle="All Classes"
            formTitle="Add A Class"
            tableHeaders={['Level', 'Class Name', 'Teacher', 'Students']}
            tableData={tableBody}
            formContent={formContent}
            scrollHeight="h-[200px]"
        />
    );
}
