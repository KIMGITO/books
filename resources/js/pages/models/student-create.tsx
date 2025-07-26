import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import {} from '@radix-ui/react-radio-group';

export default function StudentForm() {
    return (
        <AppLayout>
            <AuthLayout title="Student Form" description="create student">
                <form onSubmit={() => {}}>
                    <div className="grid justify-center gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-4">
                                <Label htmlFor="admNo">Admission Number</Label>
                                <Input id="admNo" placeholder="e.g 123456" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="fName">First Name</Label>
                                <Input id="fName" placeholder="e.g Dennis" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="mName">Middle Name</Label>
                                <Input id="mName" placeholder="e.g Kim" />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="sName">Sir Name</Label>
                                <Input id="sName" placeholder="e.g Kimanthi" />
                            </div>

                            <div className="grid gap-2">
                                <Label>Gender</Label>
                                <RadioGroup className="flex justify-center">
                                    <RadioGroupItem value="male" id="male" />
                                    <Label htmlFor="male">Male</Label>

                                    <RadioGroupItem value="female" id="female" />
                                    <Label htmlFor="female">Female</Label>
                                </RadioGroup>
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="grade">Class</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Class"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="3">form 2 West</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button variant={'outline'}>Save</Button>
                    </div>
                </form>
            </AuthLayout>
        </AppLayout>
    );
}
