import { Button } from '@/components/ui/button';
import { CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Subjects() {
    return (
        <div className="flex h-full flex-1 flex-col justify-center gap-4 overflow-x-auto rounded-xl p-1">
            <div className="grid items-center justify-between gap-4 overflow-hidden rounded-3xl border p-3 md:flex md:min-h-min dark:border-sidebar-border">
                <div className="w-full rounded-3xl border p-2 md:w-1/2">
                    <CardHeader className="text-end">List Of Subjects</CardHeader>
                    <Table className="rounded-2xl border-0 text-xs">
                        <TableHeader className="rounded-t-2xl">
                            <TableHead>No</TableHead>
                            <TableHead>Subject Name</TableHead>
                            <TableHead>Department</TableHead>
                        </TableHeader>
                        <TableBody className="rounded-2xl">
                            <TableRow className="rounded">
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>form 1 </TableCell>
                            </TableRow>
                            <TableRow className="rounded">
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>form 1 </TableCell>
                            </TableRow>
                            <TableRow className="rounded">
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>form 1 </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className="rounded-3xl border p-4">
                    <CardHeader className="py-2 text-end text-xs">Add A Subject</CardHeader>
                    <form onSubmit={() => {}}>
                        <div className="grid gap-3">
                            <div className="grid gap-2">
                                <Label htmlFor="name"> Name</Label>
                                <Input placeholder="e.g 1" id="name" type="number" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="department"> Department</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder={'Department'}></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">{'Science'}</SelectItem>
                                        <SelectItem value="0">{'Science'}</SelectItem>
                                        <SelectItem value="0">{'Science'}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button type="submit" variant={'ghost'}>
                                {' Save'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
