import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SubmitButton from '@/components/ui/submit-button';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { Department, Teacher } from '@/types';
import { useForm } from '@inertiajs/react';



export default function ({ initialData, departments }: { initialData?: Teacher; departments?: Department[] }) {
    const isEdit = initialData != null;

    const { post, put, data, setData, processing, errors } = useForm({
        first_name: initialData?.first_name || '',
        middle_name: initialData?.middle_name || '',
        sir_name: initialData?.last_name || '',
        email: initialData?.email || '',
        phone: initialData?.phone || '',
        department: initialData?.department?.id || -1,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        if (isEdit) {
            put(route('teachers.update', initialData.id), {
                preserveScroll: true,
                onSuccess: () => {
                    setData({
                        first_name: '',
                        middle_name: '',
                        sir_name: '',
                        email: '',
                        phone: '',
                        department: -1,
                    });
                },
            });
        } else {
            post(route('teachers.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    setData({
                        first_name: '',
                        middle_name: '',
                        sir_name: '',
                        email: '',
                        phone: '',
                        department: -1,
                    });
                },
            });
        }
    };
    return (
        <AppLayout>
            <AuthLayout description="Add A teacher" title="Teacher Form">
                <form onSubmit={submit}>
                    <div className="grid w-full justify-center gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-4">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    value={data.first_name}
                                    onChange={(e) => {
                                        setData('first_name', e.target.value);
                                    }}
                                    id="first_name"
                                    placeholder="e.g Dennis"
                                />
                                <InputError message={errors.first_name} />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="middle_name">Middle Name</Label>
                                <Input
                                    value={data.middle_name}
                                    onChange={(e) => {
                                        setData('middle_name', e.target.value);
                                    }}
                                    id="middle_name"
                                    placeholder="e.g Kim"
                                />
                                <InputError message={errors.middle_name} />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="sName">Sir Name</Label>
                                <Input
                                    value={data.sir_name}
                                    onChange={(e) => {
                                        setData('sir_name', e.target.value);
                                    }}
                                    id="sir_name"
                                    placeholder="e.g Kimani"
                                />
                                <InputError message={errors.sir_name} />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    value={data.email}
                                    onChange={(e) => {
                                        setData('email', e.target.value);
                                    }}
                                    id="email"
                                    placeholder="e.g dennis.kimani@gmail.com"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    value={data.phone}
                                    onChange={(e) => {
                                        setData('phone', e.target.value);
                                    }}
                                    id="phone"
                                    placeholder="e.g +254712345678"
                                />
                                <InputError message={errors.phone} />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="department">Department</Label>
                                <Select
                                    
                                    onValueChange={(value) => {
                                        setData('department', parseInt(value));
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="department"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments?.map((department) => (
                                            <SelectItem key={department.id} value={department.id.toString()}>
                                                {department.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.department} />
                            </div>
                        </div>
                        <SubmitButton isEdit={isEdit} processing={processing} />
                    </div>
                </form>
            </AuthLayout>
        </AppLayout>
    );
}
