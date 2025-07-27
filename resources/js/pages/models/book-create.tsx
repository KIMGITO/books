import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SubmitButton from '@/components/ui/submit-button';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { Book, Level, Subject } from '@/types';
import { useForm } from '@inertiajs/react';

export default function BookForm({ initialData, subjects, levels }: {levels:Level[], initialData?: Book; subjects: Subject[] }) {
    const isEdit = initialData != null;
    const { post, put, data, setData, processing, errors } = useForm({
        id: initialData?.id || -1,
        title: initialData?.title || '',
        level: initialData?.level.id || '',
        subject: initialData?.subject?.id || '',
        quantity: initialData?.quantity || 0,
        cover_image: initialData?.cover_image || '',
        description: initialData?.description || '',

         
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            put(route('books.update'), {
                onSuccess: () => {
                    setData({
                        id: -1,
                        title: '',
                        subject: -1,
                        level: -1,
                        cover_image: '',
                        quantity: 0,
                        description: '',
                    });
                },
            });
        } else {
            post(route('books.store'), {
                onSuccess: () => {
                    setData({
                        id: -1,
                        title: '',
                        subject: '',
                        level: '',
                        cover_image: '',
                        quantity: 0,
                        description: '',
                    });
                },
            });
        }
    };
    return (
        <AppLayout>
            <AuthLayout description="Add a book" title="Book Form">
                <div className="flex w-full justify-center">
                    <div className="w-full md:w-3/4">
                        <form onSubmit={submit}>
                            <div className="flex w-full flex-col gap-4 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Select onValueChange={(value) => setData('subject', value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Subject"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {subjects &&
                                                    subjects.map((subject, i) => (
                                                        <SelectItem key={i} value={subject.id.toString()}>
                                                            {subject.name}
                                                        </SelectItem>
                                                    ))}{' '}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.subject} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="level">For Class Level {'(if not revision book)'} </Label>
                                        <Select onValueChange={(value) => setData('level', value)}>
                                            <SelectTrigger id="level">
                                                <SelectValue placeholder="leave blank if not specific"></SelectValue>
                                                <SelectContent>
                                                    {levels &&
                                                        levels.map((level, i) => (
                                                            <SelectItem key={i} value={level.id.toString()}>
                                                                {level.name}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </SelectTrigger>
                                        </Select>
                                        <InputError message={errors.level} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Book Title</Label>
                                        <Input
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            placeholder="e.g English Grammar Book 1 "
                                            id="title"
                                        />
                                        <InputError message={errors.title} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="quantity">Quantity</Label>
                                        <Input
                                            value={data.quantity}
                                            step={1}
                                            min={0}
                                            onChange={(e) => setData('quantity', parseInt(e.target.value))}
                                            id="quantity"
                                            placeholder="quantity of the books "
                                            type="number"
                                        />
                                        <InputError message={errors.quantity} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* <div className="grid gap-2">
                                        <Label htmlFor="cover_image">Cover Image</Label>
                                        <Input type="file" id="cover_image" disabled={true} />
                                    </div> */}
                                </div>

                                <SubmitButton isEdit={isEdit} processing={processing}/>
                            </div>
                        </form>
                    </div>
                </div>
            </AuthLayout>
        </AppLayout>
    );
}
