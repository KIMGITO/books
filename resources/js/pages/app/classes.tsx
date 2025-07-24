// pages/settings.tsx
import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Levels, Teachers } from '@/types';
import { useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';

interface InitialValue {
    name: string;
    level: string;
    teacher: string;
}



interface PageProps {
    initialValue?: InitialValue;
    teachers: Teachers[];
    levels: Levels[];
}

export default function SettingsPage({ initialValue, teachers, levels }: PageProps) {
console.log(levels)
    
    const isEdit = initialValue != null;

    const { data, setData, errors, post, put, processing } = useForm({
        name: initialValue?.name || '',
        level: initialValue?.level || '',
        teacher: initialValue?.teacher || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put('/grades');
        } else {
            post('/grades');
        }
    };
    //set Class level
    const handleLevel = (levelInput: string) => {
        if (levelInput) {
            setData('level', levelInput);
            data.level = levelInput;
        }
    };

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
            {Array.from({ length: 12 }).map((_, i) => (
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
        <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input placeholder="e.g. 1" id="name" value={data.name} onChange={(e) => handleName(e.target.value)} />
                    <InputError message={errors.name} />
                </div>
                <div className="grid gap-4">
                    <Label htmlFor="level">Class Level</Label>
                    <Select
                        onValueChange={(value) => {
                            handleLevel(value);
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select level"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {levels != null ? (
                                levels.map((level) => (
                                    <SelectItem key={level.id} value={level.name}>
                                        {level.name}
                                    </SelectItem>
                                ))
                            ) : (
                                <SelectItem disabled={true} value="0">
                                    No levels available
                                </SelectItem>
                            )}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.level} />
                </div>
                <div className="grid gap-4">
                    <Label htmlFor="teacher">Class Teacher</Label>
                    <Select
                        onValueChange={(value) => {
                            handleTeacher(value);
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select teacher"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {teachers != null ? (
                                teachers.map((teacher) => (
                                    <SelectItem value={teacher.id.toString()}>
                                        {teacher.first_name} {teacher.last_name}
                                    </SelectItem>
                                ))
                            ) : (
                                <SelectItem disabled={true} value="0">
                                    No teachers available
                                </SelectItem>
                            )}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.teacher} />
                </div>
                <Button type="submit" variant={'ghost'} className={`${processing ? 'cursor-progress' : ''}`}>
                    {processing ? <Loader className="animate-spin" /> : `${isEdit ? 'Update' : 'Save'}`}
                </Button>
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
