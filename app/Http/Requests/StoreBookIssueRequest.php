<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookIssueRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        
        return [
            'data*bookId' => 'required|exists:books,id',
            'data*studentId' => 'required|exists:students,id',
            'data*bookNumber'=> 'required|unique:book_student,book_number',
            'data*dueDate'=>'required|date|'
        ];
    }
}
