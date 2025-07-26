import { TableWithForm } from "@/components/app-setting";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Department } from "@/types";
import { useForm } from "@inertiajs/react";
import { Loader } from "lucide-react";

interface InitialValue {
    name: string;
    description?: string;
}



export default function Departments({ initialValue, departments }: { initialValue?: InitialValue, departments?:Department[] }) {

    const isEdit = initialValue != null;

    const { data, setData, errors, post, put, processing } = useForm({
        name: initialValue?.name || '',
        description: initialValue?.description || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put('/departments');
        } else {
            post('/departments');
        }
    };
    // Set department name
    const handleName = (nameInput: string) => {
        if (nameInput) {
            setData('name', nameInput);
            
        }
    };
    // Set department description
    const handleDescription = (descriptionInput: string) => {
        if (descriptionInput) {
            setData('description', descriptionInput);
            data.description = descriptionInput;
        }
    };





    const tableHeads = ['#', 'Name', 'Subjects', 'Description'];
    const tableBody = (
        <TableBody className="rounded-2xl">
            {departments != null ? (
                departments.map((department, index) => (
                    <TableRow key={department.id} className="hover:bg-secondary">
                        <TableCell className="">{index + 1}</TableCell>
                        <TableCell className="">{department.name}</TableCell>
                        <TableCell className="">
                            {department.subjects &&
                                department.subjects.map((subject, i) => (
                                    <span key={i} className="mr-1 mb-1 inline-block rounded bg-secondary px-2 py-1 text-xs text-purple-500">
                                        {subject.name}
                                    </span>
                                ))}
                        </TableCell>
                        <TableCell>{department?.description}</TableCell>
                        <TableCell>
                            <span className="text-xs text-green-500 hover:underline">MORE</span>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={tableHeads.length} className="text-center ">
                        No departments found
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    );
    const formContent = (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name"> Name</Label>
                    <Input
                        placeholder="e.g 1"
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
                    <Label htmlFor="description"> Description {'(optional)'}</Label>
                    <Textarea
                        placeholder="e.g This is a science department"
                        id="description"
                        rows={3}
                        value={data.description}
                        onChange={(e) => {
                            handleDescription(e.target.value);
                        }}
                    />
                    <InputError message={errors.description} />
                </div>

                <Button type="submit" variant={'ghost'} className={`${processing ? 'cursor-progress' : ''}`}>
                    {processing ? <Loader className="animate-spin" /> : `${isEdit ? 'Update' : 'Save'}`}
                </Button>
            </div>
        </form>
    );
    return (
        <TableWithForm
            formContent={formContent}
            formTitle="Add a Department"
            tableData={tableBody}
            tableHeaders={tableHeads}
            tableTitle="All departments"
        />
    );
}