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





export default function SettingsPage({ initialValue, teachers, levels, classes }: { initialValue: Grade; teachers: Teacher[]; levels: Level[], classes: Grade[]}) {
    const isEdit = initialValue != null;
console.log(classes)
    const { data, setData, errors, post, put, processing } = useForm({
        id: initialValue?.id || 0,
        name: initialValue?.name || '',
        level: initialValue?.level.id|| '',
        teacher: initialValue?.teacher.id|| '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put('/grades');
        } else {
            post('/grades');
        }
    };
   
    const headers = ['#', 'Level', 'Class Name', 'Class Teacher', 'Students', 'Actions'];

    const tableBody = (
        <TableBody>
            {classes != null && classes.length > 0 ? (
                classes.map((grade, i) => (
                    <TableRow key={i}>
                        <TableCell>
                            {i+1}
                        </TableCell>
                        <TableCell>
                            {grade.level?.name} 
                        </TableCell>
                        <TableCell>{grade?.name}</TableCell>
                        <TableCell>
                            {grade.teacher?.first_name} {grade.teacher?.sir_name}
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
                    <Input placeholder="e.g. 1" id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    <InputError message={errors.name} />
                </div>
                <div className="grid gap-4">
                    <Label htmlFor="level">Class Level</Label>
                    <Select
                        onValueChange={(value) => {
                            setData('level', value);
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
                            setData('teacher', value);
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select teacher"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {teachers != null ? (
                                teachers.map((teacher) => (
                                    <SelectItem key={teacher.id} value={teacher.id.toString()}>
                                        {teacher.first_name} {teacher.sir_name}
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
