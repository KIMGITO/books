// components/TableWithForm.tsx
import { CardHeader } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableHead, TableHeader } from '@/components/ui/table';
import { ReactNode } from 'react';

interface TableWithFormProps {
    tableTitle: string;
    formTitle: string;
    tableHeaders: string[];
    tableData: ReactNode; // Accepts pre-rendered TableBody or array of data
    formContent: ReactNode;
    scrollHeight?: string;
}

export function TableWithForm({ tableTitle, formTitle, tableHeaders, tableData, formContent, scrollHeight = 'h-[150px] md:h-[350px]' }: TableWithFormProps) {
   
    return (
        <div className="flex h-full flex-1 flex-col gap-4 p-1">
            <div className="flex flex-col rounded-3xl border md:flex-row dark:border-sidebar-border">
                {/* Table Section */}
                <div className="flex-1 p-4">
                    <CardHeader className="text-end">{tableTitle}</CardHeader>
                    <div className={`relative overflow-hidden rounded-lg border ${scrollHeight}`}>
                        <ScrollArea className="h-full w-full">
                            <Table className="text-xs">
                                <TableHeader className="sticky top-0 bg-background">
                                    {tableHeaders.map((header) => (
                                        <TableHead key={header}>{header}</TableHead>
                                    ))}
                                </TableHeader>
                                {tableData}
                            </Table>
                            <ScrollBar orientation="vertical" />
                        </ScrollArea>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-4 w-full border-t-2 md:hidden" />
                <div className="mx-4 hidden h-auto border-s-2 md:block" />

                {/* Form Section */}
                <div className="grid items-center p-4">
                    <CardHeader className="py-2 text-end text-xs">{formTitle}</CardHeader>
                    {formContent}
                </div>
            </div>
        </div>
    );
}
