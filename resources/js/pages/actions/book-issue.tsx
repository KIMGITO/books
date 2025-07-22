import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { useState } from 'react';

export default function BookIssueForm() {
    // Sample data
    const [students, setStudents] = useState([
        { admNo: '1001', name: 'John Doe', class: '1 East', selected: false, bookNumber: '' },
        { admNo: '1002', name: 'Jane Smith', class: '1 East', selected: false, bookNumber: '' },
        { admNo: '1003', name: 'Michael Johnson', class: '1 West', selected: false, bookNumber: '' },
        { admNo: '1004', name: 'Emily Williams', class: '2 East', selected: false, bookNumber: '' },
    ]);

    const [bookData, setBookData] = useState({
        title: 'Mathematics book 1',
        grade: 'Grade 1',
        available: 22,
    });

    const [filters, setFilters] = useState({
        class: '',
        admNo: '',
        search: '',
    });

    const [checkAll, setCheckAll] = useState(false);

    // Filter students based on filters
    const filteredStudents = students.filter((student) => {
        return (
            (filters.class === '' || student.class === filters.class) &&
            (filters.admNo === '' || student.admNo.includes(filters.admNo)) &&
            (filters.search === '' || student.name.toLowerCase().includes(filters.search.toLowerCase()) || student.admNo.includes(filters.search))
        );
    });

    // Handlers
    const handleCheckAll = (checked: boolean) => {
        setCheckAll(checked);
        setStudents(
            students.map((student) => ({
                ...student,
                selected: checked,
            })),
        );
    };

    const handleStudentCheck = (admNo: string, checked: boolean) => {
        setStudents(students.map((student) => (student.admNo === admNo ? { ...student, selected: checked } : student)));
        if (!checked && checkAll) setCheckAll(false);
    };

    const handleBookNumberChange = (admNo: string, value: string) => {
        setStudents(students.map((student) => (student.admNo === admNo ? { ...student, bookNumber: value } : student)));
    };

    const handleFilterChange = (name: string, value: string) => {
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const selectedStudents = students
            .filter((student) => student.selected)
            .filter((student)=>student.bookNumber != '')
            .map((student) => ({
                admNo: student.admNo,
                name: student.name,
                bookNumber: student.bookNumber,
            }));

        console.log('Issuing books to:', selectedStudents);
        // Add your API call here
    };

    return (
        <AppLayout>
            <AuthLayout title="Issue Books" description=" ">
                <div className="flex justify-center">
                    <div className="grid w-full gap-4 md:w-3/4">
                        {/* Book Search Section */}
                        <div className="grid w-full justify-center gap-3">
                            <Input
                                placeholder="Enter Book Name / title"
                                className="rounded-3xl"
                                value={filters.search}
                                onChange={(e) => handleFilterChange('search', e.target.value)}
                            />
                            <div className="flex gap-5 font-black text-red-500">
                                <span>{bookData.title}</span>
                                <span>{bookData.grade}</span>
                                <span>{bookData.available} available</span>
                            </div>
                            <div className="flex justify-between">
                                <Select value={filters.class} onValueChange={(value) => handleFilterChange('class', value)}>
                                    <SelectTrigger className="w-1/4 py-0">
                                        <SelectValue placeholder="class"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1 East">1 East</SelectItem>
                                        <SelectItem value="1 West">1 West</SelectItem>
                                        <SelectItem value="2 East">2 East</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input
                                    placeholder="ADM.No"
                                    className="w-1/4 py-0"
                                    value={filters.admNo}
                                    onChange={(e) => handleFilterChange('admNo', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Student List with Checkboxes */}
                        <div className="mt-6">
                            <h3 className="mb-3 font-bold">Students</h3>
                            <div className="overflow-hidden rounded-lg border">
                                <Table className="w-full">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-left">
                                                Select<br></br>
                                                <Checkbox checked={checkAll} onCheckedChange={handleCheckAll} className="mr-2" />
                                            </TableHead>
                                            <TableHead className="text-left">ADM No</TableHead>
                                            <TableHead className="text-left">Name</TableHead>
                                            <TableHead className="text-left">Class</TableHead>
                                            <TableHead className="text-left">Book Number</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className='text-xs'>
                                        {filteredStudents.map((student) => (
                                            <TableRow key={student.admNo} className="border-t">
                                                <TableCell className="">
                                                    <Checkbox
                                                        checked={student.selected}
                                                        onCheckedChange={(checked) => handleStudentCheck(student.admNo, checked as boolean)}
                                                    />
                                                </TableCell>
                                                <TableCell className="">{student.admNo}</TableCell>
                                                <TableCell className="">{student.name}</TableCell>
                                                <TableCell className="">{student.class}</TableCell>
                                                <TableCell className="">
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter book number"
                                                        className="w-full rounded-none border-0 border-b-2 px-2 py-1 focus-visible:border-b-2 focus-visible:border-primary focus-visible:ring-0"
                                                        value={student.bookNumber}
                                                        onChange={(e) => handleBookNumberChange(student.admNo, e.target.value)}
                                                        disabled={!student.selected}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4 flex justify-end">
                            <Button className="rounded-3xl bg-blue-600 px-6 py-2 text-white hover:bg-blue-700" onClick={handleSubmit}>
                                Issue Books
                            </Button>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </AppLayout>
    );
}
