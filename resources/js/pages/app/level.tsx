import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

export default function Level() {
    return (
        <div className="flex h-full flex-1 flex-col justify-center gap-4 overflow-x-auto rounded-xl p-1">
            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                   
                </div>
            </div> */}
            <div className="grid md:flex gap-4 items-center justify-between overflow-hidden rounded-3xl border p-3 md:min-h-min dark:border-sidebar-border">
                <div className="w-full rounded-3xl border p-2 md:w-1/2 ">
                    <CardHeader className="text-end">List Of Levels</CardHeader>
                    <Table className="rounded-2xl border-0 text-xs">
                        <TableHeader className="rounded-t-2xl">
                            <TableHead>No</TableHead>
                            <TableHead>Level</TableHead>
                            <TableHead>Description</TableHead>
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
                <div className=" rounded-3xl border p-4">
                    <CardHeader className="text-end py-2 text-xs">Add A Level/Grade</CardHeader>
                    <form onSubmit={() => {}}>
                        <div className="grid gap-3">
                            <div className="grid gap-2">
                                <Label htmlFor="level"> Level</Label>
                                <Input placeholder="e.g 1" id="level" type="number" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="level"> Note {'(optional)'}</Label>
                                <Textarea placeholder="e.g This is the first level" id="note" rows={3} />
                            </div>

                            <Button type="submit" variant={'ghost'}>  Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

