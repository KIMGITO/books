import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SubmitButton from '@/components/ui/submit-button';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { Grade, Student } from '@/types';
import { useForm } from '@inertiajs/react';
import {} from '@radix-ui/react-radio-group';

export default function StudentForm({ grades, initialData }: { grades: Grade[], initialData?: Student }) {

    const isEdit = initialData != null;

    const { post, put, data, setData, processing, errors } = useForm({
        adm_no : initialData?.adm_no || '',
        first_name : initialData?.first_name || '',
        sir_name :  initialData?.sir_name || '',
        middle_name :initialData?.middle_name || '',
        gender: initialData?.gender || '',
        grade: initialData?.grade?.id || -1,
    })

    const submit = (e: React.FormEvent) => {
        console.log(data);
        e.preventDefault();
        if (isEdit) {
            put(route('students.update'), {
                preserveScroll: true,
                onSuccess: () => {
                    setData({
                        adm_no: '',
                        first_name: '',
                        sir_name: '',
                        middle_name: '',
                        gender: '',
                        grade: -1
                    })
                }
            })
        } else {
            post(route('students.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    setData(
                        {
                            adm_no: '',
                            first_name: '',
                            sir_name: '',
                            middle_name: '',
                            gender: '',
                            grade: -1
                        }
                    )
                }
            })
        }
    }
    
    return (
        <AppLayout>
            <AuthLayout title="Student Form" description="create student">
                <form onSubmit={submit}>
                    <div className="grid justify-center gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-4">
                                <Label htmlFor="adm_no">Admission Number</Label>
                                <Input value={data.adm_no} onChange={(e) => setData('adm_no', e.target.value)} id="adm_no" placeholder="e.g 123456" />
                                <InputError message={errors.adm_no} />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} id="first_name" placeholder="e.g Dennis" />
                                <InputError message={errors.first_name} />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="middle_name">Middle Name</Label>
                                <Input value={data.middle_name} onChange={(e) => setData('middle_name', e.target.value)} id="middle_name" placeholder="e.g Kim" />
                                <InputError message={errors.middle_name} />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="sir_name">Sir Name</Label>
                                <Input value={data.sir_name} onChange={(e) => setData('sir_name', e.target.value)} id="sir_name" placeholder="e.g Kimanthi" />
                                <InputError message={errors.sir_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label>Gender</Label>
                                <RadioGroup className="flex justify-center" onValueChange={(value) => {setData('gender', value)}}>
                                    <RadioGroupItem value="male" id="male" />
                                    <Label htmlFor="male">Male</Label>

                                    <RadioGroupItem value="female" id="female" />
                                    <Label htmlFor="female">Female</Label>
                                </RadioGroup>
                                <InputError message={errors.gender }/>
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="grade">Class</Label>
                                <Select onValueChange={(value) => {setData('grade', parseInt(value));}}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Class"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            grades && grades.map((grade) => (
                                                <SelectItem key={grade.id} value={grade.id.toString()}>
                                                    {grade.name}
                                                </SelectItem>
                                            ))
                                        }
                                       
                                    </SelectContent>
                                </Select>
                                <InputError  message={errors.grade} />
                            </div>
                        </div>

                       <SubmitButton isEdit={isEdit} processing = {processing} />
                    </div>
                </form>
            </AuthLayout>
        </AppLayout>
    );
}
