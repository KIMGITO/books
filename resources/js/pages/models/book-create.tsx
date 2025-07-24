import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';

export default function BookForm() {
    return (
        <AppLayout>
            <AuthLayout description="Add a book" title="Book Form">
                <div className="flex w-full justify-center">
                    <div className="w-full md:w-3/4">
                        <form onSubmit={() => {}}>
                            <div className="flex w-full flex-col gap-4 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Subject"></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="maths">Maths</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="level">Graded/level</Label>
                                        <Select>
                                            <SelectTrigger id="level">
                                                <SelectValue placeholder="Graded/level"></SelectValue>
                                                <SelectContent>
                                                    <SelectItem value="1">Level 1</SelectItem>
                                                </SelectContent>
                                            </SelectTrigger>
                                        </Select>{' '}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Book Title</Label>
                                        <Input placeholder="e.g English Grammar Book 1 " id="title" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="status">Condition</Label>
                                        <Select>
                                            <SelectTrigger id="status">
                                                <SelectValue placeholder="Condition"></SelectValue>
                                                <SelectContent>
                                                    <SelectItem value="new">New</SelectItem>
                                                    <SelectItem value="like_new">Like New</SelectItem>
                                                    <SelectItem value="good">Good</SelectItem>
                                                    <SelectItem value="acceptable">Acceptable</SelectItem>
                                                </SelectContent>
                                            </SelectTrigger>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="cover_image">Cover Image</Label>
                                        <Input type="file" id="cover_image" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="quantity">Quantity</Label>
                                        <Input id="quantity" placeholder='quantity of the books ' type='number'/>
                                    </div>
                                </div>

                                <Button variant={'outline'} type="submit" className="mt-4">
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </AuthLayout>
        </AppLayout>
    );
}
