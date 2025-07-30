import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import { Book, Grade, Student } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Scrollbar } from '@radix-ui/react-scroll-area';
import React, { useEffect, useMemo, useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

interface BookIssueFormProps {
    books: Book[];
    students: Student[];
    grades: Grade[];
}

export default function BookIssueForm({ books = [], students = [], grades = [] }: BookIssueFormProps) {
    // State
    const { error, success } = usePage().props;
    
    useEffect(() => {
        if (success) {
              const message = success.toString();
              const duration = Math.min(message.length * 100, 60000);
             toast.success(success.toString(), {
            duration: duration
        });
         }
        
        if (error) {
             const message = error.toString();
             const duration = Math.min(message.length * 100, 60000);
            toast.error(error.toString(), {
                duration: duration,
            });

        }

    },[error, success])
   
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGradeId, setSelectedGradeId] = useState<string>(grades[0]?.id.toString());
    const [selectedDueDate, setSelectedDueDate] = useState<string>(`${new Date().getFullYear()}-12-31`);
    const [studentSelections, setStudentSelections] = useState<Record<string, boolean>>({});
    const [bookNumbers, setBookNumbers] = useState<Record<string, string>>({});
    const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
    const [submitProgress, setSubmitProgress] = useState<number>(0)

    // Filter books by search term (title and department)
    const filteredBooks = useMemo(() => {
        const searchLower = searchTerm.toLowerCase().trim();
        return books.filter((book) => {
            const titleMatch = book.title.toLowerCase().includes(searchLower);
            const departmentMatch = book.subject?.name?.toLowerCase().includes(searchLower);
            return titleMatch || departmentMatch;
        });
    }, [books, searchTerm]);

    
    // Get selected book
    const selectedBook = useMemo(() => {
        
        return filteredBooks.find((book) => book.id === selectedBookId) || (filteredBooks.length > 0 ? filteredBooks[0] : null);
    }, [filteredBooks, selectedBookId]);

   
    // Calculate remaining quantity
    const remainingQuantity = selectedBook ? selectedBook.quantity - Object.values(studentSelections).filter(Boolean).length : 0;


    // Filter students by grade ID - FIXED VERSION
    const filteredStudents = useMemo(() => {
       
        return students.filter((student) => student.grade_id.toString() === selectedGradeId);
    }, [students, selectedGradeId]);

    // Reset selections when book changes
    useEffect(() => {
        setStudentSelections({});
        setBookNumbers({});
    }, [selectedBook]);

    // Handlers
    const handleStudentToggle = (studentId: string) => {
        if (!selectedBook) return;

        setStudentSelections((prev) => {
            const newSelections = { ...prev };
            if (newSelections[studentId]) {
                delete newSelections[studentId];
            } else if (remainingQuantity > 0) {
                newSelections[studentId] = true;
            }
            return newSelections;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!selectedBook) return;

       
        
       const issuedBooks = Object.keys(studentSelections)
           .filter((id) => bookNumbers[id]?.trim())
           .map((id) => ({
               studentId: id,
               bookId: selectedBook.id,
               bookNumber: bookNumbers[id],
               dueDate: selectedDueDate
           }));

        router.post(
            route('books-issue.store'),
            {
                data: issuedBooks,
            },
            {
                onProgress: (event) => setSubmitProgress(Math.round((Number(event?.loaded) / Number(event?.total)) * 100)),
            },
        );
        
    };

    return (
        <AppLayout>
            <AuthLayout title="Issue Books" description=" ">
                <div className="flex justify-center">
                    <div className="grid w-full gap-4 md:w-3/4">
                        {/* Book Search Section */}
                        <div className="grid w-full justify-center gap-3">
                            <Input
                                placeholder="Search book by book title"
                                className="rounded-3xl"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setSelectedBookId(-1);
                                }}
                            />
                            {/* Book Cards Grid */}
                            <div className="h-[145px] overflow-hidden">
                                <Toaster  richColors position='top-center'/>
                                <ScrollArea className="h-full whitespace-nowrap">
                                    <div className="grid w-max gap-2 space-x-4 p-4 md:grid-cols-2">
                                        {filteredBooks.length > 0 ? (
                                            filteredBooks.map((book) => (
                                                <div
                                                    key={book.id}
                                                    className={`flex w-64 cursor-pointer flex-col gap-1 rounded-lg p-3 transition-all ${selectedBookId === book.id ? 'bg-gray-700/50' : 'bg-gray-700/20 hover:bg-gray-700/30'}`}
                                                    onClick={() => {
                                                        setSelectedBookId(book.id);
                                                        setSearchTerm(book.title);
                                                    }}
                                                >
                                                    <div className="font-medium">{book.title}</div>
                                                    <div className="text-sm">Level: {book.level?.name || 'N/A'}</div>
                                                    {book.subject?.name && <div className="text-sm">Subject: {book.subject.name}</div>}
                                                    <div className="text-sm">Available: {book.quantity}</div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="w-full p-3 text-center text-gray-500">
                                                {searchTerm ? 'No matching books found' : 'Search for a book to issue'}
                                            </div>
                                        )}
                                    </div>
                                    <Scrollbar orientation="vertical" />
                                </ScrollArea>
                            </div>
                            {/* Selected Book Info */}
                            {selectedBook && (
                                <div className="flex flex-col gap-1 rounded-lg bg-gray-700/50 p-3">
                                    <div className="font-medium">Selected: {selectedBook.title}</div>
                                    <div className="text-sm">
                                        Available: {remainingQuantity}/{selectedBook.quantity}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Grade Filter */}
                        <Select value={selectedGradeId} onValueChange={(e) => setSelectedGradeId(e)}>
                            <SelectTrigger>
                                <SelectValue className="uppercase" placeholder="Filter by grade" />
                            </SelectTrigger>
                            <SelectContent>
                                {grades.map((grade) => (
                                    <SelectItem key={grade.id} value={grade.id.toString()} className="uppercase">
                                        {grade.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* add return data  */}

                        <div className="grid gap-2">
                            <Label htmlFor="selectedDueDate">Due Date</Label>
                            <Input
                                min={new Date().toISOString().split('T')[0]}
                                value={selectedDueDate}
                                onChange={(e) => setSelectedDueDate(e.target.value)}
                                id="selectedDueDate"
                                type="date"
                            />{' '}
                        </div>

                        {/* Students Table */}
                        <div className="mt-4 overflow-hidden rounded-lg border">
                            <Table>
                                <TableHeader className="bg-gray-700/50">
                                    <TableRow>
                                        <TableHead className="w-12">
                                            <Checkbox
                                                className="bg-gray-100"
                                                checked={
                                                    Object.keys(studentSelections).length > 0 &&
                                                    Object.keys(studentSelections).length === filteredStudents.length
                                                }
                                                onCheckedChange={(checked) => {
                                                    if (checked) {
                                                        const newSelections: Record<string, boolean> = {};
                                                        filteredStudents.forEach((student) => {
                                                            if (Object.keys(newSelections).length < remainingQuantity) {
                                                                newSelections[student.id] = true;
                                                            }
                                                        });
                                                        setStudentSelections(newSelections);
                                                    } else {
                                                        setStudentSelections({});
                                                    }
                                                }}
                                                disabled={!selectedBook || remainingQuantity <= 0}
                                            />
                                        </TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Grade</TableHead>
                                        <TableHead>Book Number</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredStudents.length > 0 ? (
                                        filteredStudents.map((student) => (
                                            <TableRow key={student.id}>
                                                <TableCell>
                                                    <Checkbox
                                                        checked={!!studentSelections[student.id]}
                                                        onCheckedChange={() => handleStudentToggle(student.id.toString())}
                                                        disabled={!selectedBook || (!studentSelections[student.id] && remainingQuantity <= 0)}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {student.first_name} {student.sir_name}
                                                </TableCell>
                                                <TableCell>{student.grade?.name || 'N/A'}</TableCell>
                                                <TableCell>
                                                    <Input
                                                        value={bookNumbers[student.id] || ''}
                                                        onChange={(e) =>
                                                            setBookNumbers((prev) => ({
                                                                ...prev,
                                                                [student.id]: e.target.value,
                                                            }))
                                                        }
                                                        disabled={!studentSelections[student.id]}
                                                        placeholder="Enter number"
                                                        className="border-0 border-b-2 focus-visible:ring-0"
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={4} className="py-4 text-center">
                                                {selectedGradeId === 'all' ? 'No students available' : 'No students in selected class'}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                        {/* submit progress */}
                        <Progress value={submitProgress}/>
                        {/* Submit Button */}
                        <div className="mt-4 flex justify-end">
                            <Button
                                onClick={handleSubmit}
                                disabled={!selectedBook || Object.keys(studentSelections).length === 0}
                                className="rounded-3xl px-6 py-2"
                            >
                                Issue {Object.keys(studentSelections).length} Books
                            </Button>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </AppLayout>
    );
}
