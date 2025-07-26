import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Level } from '@/types';
import { useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';

interface InitialLevel  {
    level: string;
    description: string;
}


export default function Levels({ initialLevel , levels}: {initialLevel?:InitialLevel, levels:Level[]}) {
    const isEdit = initialLevel != null;
    const tableHeaders = ['#', 'Grade', 'Description', 'Action'];

    const tableData = (
        <TableBody className="rounded-2xl">
            {levels != null ? levels && levels.map((level, index) => (
                <TableRow key={level.id} className="hover:bg-secondary">
                    <TableCell className="">{index + 1}</TableCell>
                    <TableCell className="">{level.name}</TableCell>
                    <TableCell className="">{level.description}</TableCell>
                    <TableCell className="hover:underline text-green-500">
                       MORE
                    </TableCell>
                </TableRow>
            )) :
                
                <TableRow>
                    <TableCell colSpan={tableHeaders.length} className="text-center text-gray-500">
                        No levels found
                    </TableCell>
                </TableRow>
            }
        </TableBody>
    );

    const { data, errors, processing, post, setData, put } = useForm({
        name: initialLevel?.level || '',
        description: initialLevel?.description || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put('levels');
        } else {
            post('/levels');
        }
        
    };

    //set Level name

    const handleName = (nameInput: string) => {
        if (nameInput) {
            setData('name', nameInput);
            data.name = nameInput;
        }
    };
    //set description
    const handleDescription = (descriptionInput: string) => {
        if (descriptionInput) {
            setData('description', descriptionInput);
            data.description = descriptionInput;
        }
    };

    const formData = (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
                <div className="grid gap-2">
                    <Label htmlFor="name"> Level Name</Label>
                    <Input
                        placeholder="e.g 1"
                        id="name"
                        type="number"
                        value={data.name}
                        onChange={(e) => {
                            handleName(e.target.value);
                        }}
                    />
                    <InputError message={errors.name} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description"> description </Label>
                    <Textarea
                        placeholder="e.g This is the first level"
                        id="description"
                        rows={3}
                        value={data.description}
                        onChange={(e) => {
                            handleDescription(e.target.value);
                        }}
                    />
                    <InputError message={errors.description} />
                </div>

                <Button type="submit" variant={'ghost'} className={`${processing ? 'cursor-progress' : 'cursor-pointer'}`}>
                    {processing ? <Loader className="animate-spin" /> : `${isEdit ? 'Update' : 'Save'}`}
                </Button>
            </div>
        </form>
    );

    return (
        <TableWithForm
            formContent={formData}
            formTitle="Add A Grade level"
            tableData={tableData}
            tableHeaders={tableHeaders}
            tableTitle={'All Levels'}
        />
    );
}
