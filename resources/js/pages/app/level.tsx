import { TableWithForm } from '@/components/app-setting';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { Loader } from 'lucide-react';

interface InitialLevel  {
    level: string;
    description: string;
}

interface Props {
    initialLevel?: InitialLevel;
}


export default function Levels({ initialLevel }: Props) {
    const isEdit = initialLevel != null;
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
