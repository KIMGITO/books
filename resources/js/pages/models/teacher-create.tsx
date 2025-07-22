import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';

export default function () {
    return (
        <AppLayout>
            <AuthLayout description="Add A teacher" title="Teacher Form">
                <form onSubmit={() => {}}>
                    <div className="grid gap-6 w-full justify-center">
                        <div className="grid grid-cols-2 gap-4">
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
                                <Input id="sName" placeholder="e.g Kimani" />
                            </div>

                            <div className="grid gap-4">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="e.g dennis.kimani@gmail.com" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" placeholder="e.g +254712345678" />
                            </div>
                            <div className="grid gap-4">
                                <Label htmlFor="department">Department</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="department"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mathematics">mathematics</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button type="submit" variant={'outline'}>
                            Save
                        </Button>
                    </div>
                </form>
            </AuthLayout>
        </AppLayout>
    );
}
