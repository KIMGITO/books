import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';

export default function BookReturn() {
    return (
        <AppLayout>
            <AuthLayout title="Book Return" description="Return books issued to students">
                <div className="w-full:md-w-3/4 grid justify-center gap-4">
                    <Input placeholder="book number E.g E/123/23" className="rounded-3xl" />
                </div>

                <Card className="rounded-2xl py-0 pt-4">
                    <CardHeader>Book Title: {'Mathematics Book 1'}</CardHeader>
                    <CardContent className="flex-row-reverse gap-4 md:flex">
                        <div className="flex w-full items-center justify-center border md:w-1/4">
                            <span>image</span>
                        </div>
                        <div className="grid w-full gap-2 md:w-3/4">
                            <div className="flex justify-between">
                                <span>Issued To:</span>
                                <span>John Doe</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ADM.No:</span>
                                <span>1161</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Issue Condition:</span>
                                <span>New</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Issued On:</span>
                                <span>2023-10-01</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Due Date:</span>
                                <span>2023-10-15</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between rounded-b-2xl p-2">
                        <Button variant={'outline'}>Cancel</Button>
                        <Button onClick={() => {}} variant={'default'}>
                            Return
                        </Button>
                    </CardFooter>
                </Card>
            </AuthLayout>
        </AppLayout>
    );
}
