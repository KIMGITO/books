// pages/settings.tsx
import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SubmitButton from '@/components/ui/submit-button';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Grade, Level, Teacher } from '@/types';
import { useForm } from '@inertiajs/react';

interface InitialValue {
    name: string;
    level: string;
    teacher: string;
}



interface PageProps {
    initialValue?: InitialValue;
    teachers: Teacher[];
    levels: Level[];
    classes: Grade[];
}

export default function SettingsPage({ initialValue, teachers, levels, classes }: PageProps) {

    
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
        }
    };

    const handleName = (nameInput: string) => {
        if (nameInput) {
            setData('name', nameInput);
        }
    };

    const handleTeacher = (teacherInput: string) => {
        if (teacherInput) {
            setData('teacher', teacherInput);
        }
    };
    const headers = ['Level', 'Class Name', 'Teacher', 'Students','Actions'];


    const tableBody = (
        <TableBody>
            {classes != null && classes.length > 0 ? (
                classes.map((grade, i) => (
                    <TableRow key={i}>
                        <TableCell>{grade.level?.name} {" "} { grade.level?.description }</TableCell>
                        <TableCell>{grade?.name}</TableCell>
                        <TableCell>
                            {grade.classTeacher?.first_name} {grade.classTeacher?.last_name}
                        </TableCell>
                        <TableCell>{60}</TableCell> {/* Added class name */}
                        <TableCell>
                            <span className="text-xs text-green-500 hover:underline">MORE</span>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={5} className="text-center text-gray-500">
                        {' '}
                        {/* Updated colSpan to 5 */}
                        No classes available
                    </TableCell>
                </TableRow>
            )}
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
                                        {level.name} {level.description}
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
                                    <SelectItem key={teacher.id} value={teacher.id.toString()}>
                                        {' '}
                                        {/* Added key */}
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
                <SubmitButton isEdit={isEdit} processing={processing} />
            </div>
        </form>
    );

    return (
        <TableWithForm
            tableTitle="All Classes"
            formTitle="Add A Class"
            tableHeaders={headers}
            tableData={tableBody}
            formContent={formContent}
            scrollHeight="h-[200px]"
        />
    );
}
