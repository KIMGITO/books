import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SubmitButton from '@/components/ui/submit-button';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { Department, Teacher } from '@/types';
import { useForm } from '@inertiajs/react';


export default function ({initialData, departments}:{initialData?:Teacher, departments?: Department[]}) {

    const isEdit = initialData != null;

    const { post, put ,data, setData, processing, errors } = useForm({
        fName: initialData?.first_name || '',
        mName: initialData?.middle_name || '',
        sName: initialData?.last_name || '',
        email: initialData?.email || '',
        phone: initialData?.phone || '',
        department: initialData?.department?.id || '',
    });


    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEdit) {
            put(route('teachers.update', initialData.id), {
                preserveScroll: true,
                onSuccess: () => {
                    setData({
                        fName: '',
                        mName: '',
                        sName: '',
                        email: '',
                        phone: '',
                        department: ''
                    });
                }
            });
        } else {
            post(route('teachers.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    setData({
                        fName: '',
                        mName: '',
                        sName: '',
                        email: '',
                        phone: '',
                        department: ''
                    });
                }
            });
        }

    }
    return (
        <AppLayout>
            <AuthLayout description="Add A teacher" title="Teacher Form">
                <form onSubmit={() => {}}>
                    <div className="grid gap-6 w-full justify-center">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-4">
                                <Label htmlFor="fName">First Name</Label>
                                <Input value={data.fName} onChange={(e) => {setData('fName', e.target.value)}} id="fName" placeholder="e.g Dennis" />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="mName">Middle Name</Label>
                                <Input value={data.mName} onChange={(e) => {setData('mName', e.target.value)}} id="mName" placeholder="e.g Kim" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="sName">Sir Name</Label>
                                <Input value={data.sName} onChange={(e) => {setData('sName', e.target.value)}} id="sName" placeholder="e.g Kimani" />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="email">Email</Label>
                                <Input value={data.email} onChange={(e) => {setData('email', e.target.value)}} id="email" placeholder="e.g dennis.kimani@gmail.com" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="phone">Phone</Label>
                                <Input value={data.phone} onChange={(e) => {setData('phone', e.target.value)}} id="phone" placeholder="e.g +254712345678" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="department">Department</Label>
                                <Select value={data.department.toString()} onOpenChange={(value) => {setData('department', value.toString())}}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="department"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>

                                        {
                                            departments?.map((department) => (
                                                <SelectItem key={department.id} value={department.id.toString()}>
                                                    {department.name}
                                                </SelectItem>
                                            ))
        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <SubmitButton isEdit={isEdit} processing={processing} />
                    </div>
                </form>
            </AuthLayout>
        </AppLayout>
    );
}
